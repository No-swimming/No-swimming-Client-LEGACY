import { useState } from "react";
import GoogleLoginBtn from "../components/Login";
import * as _ from "../styles/Login";

const Login = () => {
    const [cardState, setCardState] = useState('google');

    function switchCard(){
        if(cardState === 'google') setCardState('admin');
        else if(cardState === 'admin') setCardState('google');
    }

    if(cardState==='google'){
        return (
            <_.BgContainer>
                <p>로그인</p>
                <GoogleLoginBtn/>
                <a onClick={switchCard}>관리자 로그인</a>
            </_.BgContainer>
    );}
    else{
        return(
            <_.BgContainer>
                <p>관리자 로그인</p>
                <a onClick={switchCard}>← 돌아가기</a>
                <div>
                    <label>아이디</label>
                    <input></input>
                </div>
                <div>
                    <label>비밀번호</label>
                    <input></input>
                </div>
                계정을 받으려면 어쩌구
                <button>로그인</button>
            </_.BgContainer>
    );
    }
};

export default Login;
