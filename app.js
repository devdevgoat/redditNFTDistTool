import dotenv from 'dotenv';
import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import {fileURLToPath} from 'url';
import axios from 'axios';
import pkg from 'pg/lib/index.js';
import snoowrap from 'snoowrap'

const { Client } = pkg;

dotenv.config();
initDB();

const r = new snoowrap({
    userAgent: 'devdevgoat|backend script',
    clientId: process.env.REDDIT_CLIENT,
    clientSecret: process.env.REDDIT_SECRET,
    refreshToken: process.env.REDDIT_REFRESH
  });


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use('/js', express.static(__dirname + '/public/js'));

let sessionUsers = {}

/* ROUTES */
app.get('/', (req, res) => {
    let random = makeid(10);
    sessionUsers[random]="pending";
    res.render('connectWallet',{sessionId:random});
});

app.get('/connected', (req, res) => {
    if (sessionUsers[req.query.sessionId]){
        console.log("Valid session found. Assigning wallet");
        sessionUsers[req.query.sessionId]=req.query.wallet
        console.log('Prompting reddit login');
        console.log(`Using host_name: ${process.env.HOST_NAME}`)
        res.redirect("https://www.reddit.com/api/v1/authorize?client_id=8zqnjjuLynzVhdh7xemYGQ&response_type=code&state="+req.query.sessionId+`&redirect_uri=https://${process.env.HOST_NAME}/login&duration=temporary&scope=identity`)
    } else {
        console.log('Something went wrong. sending to begining...')
        res.redirect('/');
    }
});

app.get('/login', (req, res) => {
    if (req.query.state){
        let sessionId = req.query.state
        if (sessionUsers[sessionId]){
            let wallet = sessionUsers[sessionId]
            if(wallet=='pending'){
                console.log('User didn\'t connnect wallet first')
            } else {
                // now we have a wallet and a reddit account!
                console.log('Woot!');
                console.log(req.query.code);
                validateUser(req.query.code).then(u =>
                    {
                        storeWallet(u,wallet)
                        res.render('done',{user:u,wallet:wallet})
                    }
                );

            }
        } else {
            console.log("Hmmm, invalid session received from callback.");
        }
    }else{
        console.log('Missing state from reddit login');
    }

});

app.get('lookupUserId',(req,res)=>{
    console.log(req.query)
    res.render('tmp');
});

/* Dashboard */

app.get('/dashboard/:postid',(req,res) => {
    var postId = req.params.postid; //4j8p6d
    var ethRegEx = /0x[a-fA-F0-9]{40}/;
    var data = {}
    r.getSubmission(postId).expandReplies({limit: 125, depth: 1}).then(p=>{
        // should make sure only the OP can load this page
        console.log(p.author.name); // could have the user login, then check this
        for ( var c = 0; c < p.comments.length; c++ ){
            let address = p.comments[c].body.match(ethRegEx);
            let user = p.comments[c].author.name;
            // since we're loading the comments anyway, we can just scrape for eth addresses
            if (address){
                // console.log(user + ":" +address);
                data[user]=address[0];
            }
            // otherwise, we need to lookup in the database for that user
            // todo: lookup in db lol
        }
        console.log(data);
        data.string = JSON.stringify(data)
        res.render('tmp',{data});
    })

});

/* USER AUTHENTICATION WITH REDDIT */

async function validateUser(authorization_code){
    let t = await getUserToken(authorization_code);
    let u = await getUserId(t);
    return u;
}


async function getUserToken(authorization_code){
   let t = await axios.post('https://www.reddit.com/api/v1/access_token',
            'grant_type=authorization_code&code='+authorization_code+'&redirect_uri='+`https://${process.env.HOST_NAME}/lookupUserId`,
            {
                auth: {
                username: process.env.REDDIT_CLIENT,
                password: process.env.REDDIT_SECRET
                }
            }
        ).then(res => {
            if(res.status == 200){
                console.log('First time seeing token:',res.data.access_token);
                return res.data.access_token;
            }
            else {
                console.log('Failed getting token');
                return null;
            }
        });
    return t;
}

async function getUserId(t2){
    console.log('Sending token '+t2);
    var config = {
        method: 'get',
        url: 'https://oauth.reddit.com/api/v1/me',
        headers: {
          'Authorization': `bearer ${t2}`,
          'User-Agent': 'devdevgoat|backend script'
        }
      };

      let u = await axios(config)
      .then(function (response) {
        // console.log(JSON.stringify());
        // console.log(`Found username:${response.data.name}`);
        return response.data.name;
      })
      .catch(function (error) {
        console.log(error);
        return null;
      });
    return u;
}

/* DATABASE STUFF */

async function storeWallet(u,w) {
    const c = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
      });
    c.connect();
    console.log(`Setting user ${u}'s wallet to ${w}`);
    let insert_sql = 'INSERT INTO public.wallets VALUES($1,$2) ON CONFLICT DO NOTHING';
    c.query(insert_sql,[u,w.toLowerCase()], (err, res) => {
        if (err) throw err;
        console.log(res);
        c.end();
      });
}

async function initDB() {
    console.log("Initilizaign DB");
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
      });

      client.connect();

      let create_sql = `CREATE TABLE IF NOT EXISTS public.wallets (
          username varchar(150) NOT NULL,
          wallet varchar(70) NOT NULL,
          PRIMARY KEY (username,wallet)
          );`

      client.query(create_sql, (err, res) => {
        if (err) throw err;
        console.log(res);
        client.end();
      });
}

/* MISC FUNCTIONS */
// In order to maintain state and make sure we don't mismap users when
// multiple are using the app at once, we create a random id and track
// it between page loads (to and from reddit) to insure the user auth'd
// is the user that started the auth. Trash the id after.
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
}


/* SERVER */

app.listen(process.env.LOCAL_PORT||process.env.PORT);
console.log(`Listening at https://${process.env.HOST_NAME}:${process.env.LOCAL_PORT}`)


