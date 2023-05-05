const axios = require('axios');

module.exports = async (req, res) => {
    const { accessToken } = req.body;
    return axios.get('https://kapi.kakao.com/v2/user/me', {
        headers: {
            Authorization: `Bearer ${accessToken.accessToken}`,
        }
    })
    .then((res) => res.data)
    .then((data) => res.send(data.kakao_account))
    .catch((e) => res.sendStatus(403));

}