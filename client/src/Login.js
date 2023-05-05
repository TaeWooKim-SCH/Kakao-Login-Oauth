export default function Login (){
  const CLIENT_ID = '50741d911b03649282913a061464e7ce';
  const REDIRECT_URI = 'http://localhost:3000/';

  const loginHandler = (() => {
    return window.location.assign(
      `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`
    );
  })

  // const getAccessCode = () => {
  //   return axios.get(
  //     `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`,

  //     )
  //   .then (res => {
  //     console.log(res);
  //   })
  // }

  return (
    <div>
      <h2>정신차려 카카오 로그인해야돼</h2>
      <button onClick={loginHandler}>로그인하기 ㅋ</button>
    </div>
  )
}