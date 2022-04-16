import dotenv from 'dotenv';
import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import {fileURLToPath} from 'url';
import axios from 'axios';
import pkg from 'pg/lib/index.js';

const { Client } = pkg;

dotenv.config();
initDB();

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
        res.redirect("https://www.reddit.com/api/v1/authorize?client_id=8zqnjjuLynzVhdh7xemYGQ&response_type=code&state="+req.query.sessionId+"&redirect_uri=http://localhost:3000/login&duration=temporary&scope=identity")
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
                        res.render('tmp',{data:u})
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




/* USER AUTHENTICATION WITH REDDIT */

async function validateUser(authorization_code){
    let t = await getUserToken(authorization_code);
    let u = await getUserId(t);
    return u;
}


async function getUserToken(authorization_code){
   let t = await axios.post('https://www.reddit.com/api/v1/access_token', 
            'grant_type=authorization_code&code='+authorization_code+'&redirect_uri='+'http://localhost:3000/lookupUserId',
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
    console.log(`Settingn user ${u}'s wallet to ${w}`);
    let insert_sql = 'INSERT INTO public.wallets VALUES($1,$2) ON CONFLICT DO NOTHING';
    c.query(insert_sql,[u,w], (err, res) => {
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

app.listen(3000);
console.log("Listening at http://localhost:3000")