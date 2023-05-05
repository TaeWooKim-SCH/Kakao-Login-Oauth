// const express = require('express');
// const router = express.Router();
// const axios = require('axios');
// const KAKAO_OAUTH_TOKEN_API_URL = "https://kauth.kakao.com/oauth/token";
// const KAKAO_GRANT_TYPE = "authorization_code";
// const KAKAO_CLIENT_ID = '50741d911b03649282913a061464e7ce';
// const KAKAO_REDIRECT_URL = 'http://localhost:5000/kakao/code';

const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const controllers = require('./controllers');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

const corsOptions = {
  origin : 'http://localhost:3000',
  credentials : true,
  methods : ['GET', 'POST', 'OPTIONS']
}

app.use(cors(corsOptions));

app.post('/callback', controllers.callback);

app.post('/userInfo', controllers.userInfo);

app.listen(4000 , ()=>{
  console.log(` 
  **🙉 server is listening on 4000 ...** 
  `)
})

