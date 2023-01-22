import { useState } from "react";
import { GoogleLoginBtn, LoginInput } from "../components/Login";
import * as _ from "../styles/Login";

const Login = () => {
    const [cardState, setCardState] = useState('google');

    function switchCard(){
        if(cardState === 'google') setCardState('admin');
        else if(cardState === 'admin') setCardState('google');
    }

    //구글(학생)로그인
    if(cardState==='google'){
        return (
            <_.BgContainer>
                <p>로그인</p>
                <GoogleLoginBtn/>
                <a onClick={switchCard}>관리자 로그인</a>
            </_.BgContainer>
    );}

    //관리자 로그인
    else{
        return(
            <_.BgContainer>
                <div>
                    <p>관리자 로그인</p>
                    <a onClick={switchCard}>← 돌아가기</a>
                </div>
                <LoginInput label="아이디" />
                <LoginInput label="비밀번호" isPassword />
                계정을 발급받으려면 서비스 관리자에게 문의하세요
                <_.BtnLong>로그인</_.BtnLong>
            </_.BgContainer>
        );
    }
};

export default Login;
