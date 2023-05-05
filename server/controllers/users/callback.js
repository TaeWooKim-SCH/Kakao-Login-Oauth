const axios = require('axios');
const CLIENT_ID = '50741d911b03649282913a061464e7ce';
const REDIRECT_URL = 'http://localhost:3000/';

module.exports = async (req, res) => {
    // console.log(req.body);
    try {
        const result = await axios(
            {
                method: 'post',
                url: 'https://kauth.kakao.com/oauth/token',
                headers: {
                    'content-type':'application/x-www-form-urlencoded'
                },
                data: {
                    grant_type: "authorization_code",
                    client_id: CLIENT_ID,
                    redirect_uri: REDIRECT_URL,
                    code: req.body.authorizationCode
                }
            }
        );
        const accessToken = result.data.access_token;
        console.log(result.data);
        return res.status(200).send({accessToken});
    }
    catch (e) {
        // console.log(e);
    }
}