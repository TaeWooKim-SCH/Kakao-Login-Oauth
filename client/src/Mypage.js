import axios from "axios";
import { useEffect, useState } from "react";

export default function Mypage ({accessToken, setIsLogin}){
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      axios.post('http://localhost:4000/userinfo', {accessToken})
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        console.log(data);
      })
    }, [accessToken])

    return (
      <>
      {!isLoading && (
      <div>
        <h2>마이 페이지</h2>
        <div className="email">{data.email}</div>
        <div className="name">{data.profile.nickname}</div>
        <img className="profile-img" src={data.profile.thumbnail_image_url} style = {{width: '100px'}}></img>
      </div>
      )}
      </>
    )
  }