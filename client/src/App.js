// import axios from 'axios';
// import './App.css';

// function App() {
//   const CLIENT_ID = '50741d911b03649282913a061464e7ce';
//   const REDIRECT_URI = 'http://localhost:5000/kakao/code';
//   const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
//   return (
//     <div>
//       <button 
//         className='kakao_btn'
//         onClick={}
//       > 
//       </button>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login';
import Mypage from './Mypage';

export default function App (){
  const [isLogin, setIsLogin] = useState(false);
  const [ accessToken, setAccessToken] = useState(null);

  const getAccessToken = async (authorizationCode) => {
    axios.post('http://localhost:4000/callback', {authorizationCode})
    .then((res) => {
      setAccessToken(res.data);
      setIsLogin(true);
    })
    .catch(err => console.log(err));
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
  }, [])
  // const getAccessCode = () => {
  //   return axios.get(
  //     `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`,

  //     )
  //   .then (res => {
  //     console.log(res);
  //   })
  // }

  return (
    <>
    {!isLogin ? <Login/> : <Mypage accessToken = {accessToken} setIsLogin = {setIsLogin}/>}
    </>
  )
}
