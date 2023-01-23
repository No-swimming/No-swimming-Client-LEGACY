import * as _ from "../styles/Login";
import { GoogleMiniIcn } from "../assets";
import { Eye24Regular, EyeOff24Regular } from "@fluentui/react-icons";
import { useState } from "react";

function GoogleLoginBtn(){
    return(
        <_.GoogleBtn>
            <img src={GoogleMiniIcn}/>
            Google로 로그인
        </_.GoogleBtn>
    );
};

type LoginInputType = {
    label: string;
    isPassword?: boolean;
}

type EyeType = {
    onClick: any;
    isTrue: Boolean;
}

function PasswordEye({onClick, isTrue}:EyeType){
    return(
        <button onClick={onClick}>
            {isTrue ? <EyeOff24Regular/> : <Eye24Regular/>}
        </button>
    );
};

function LoginInput({label, isPassword}:LoginInputType){
    const [showPwd,setShow] = useState(false);
    function pwdEyeswitch(){
        if(showPwd===false) {setShow(true); console.log("setshowis True ");}
        else if(showPwd===true) setShow(false);
    }

    return(
        <_.Input>
            <label>{label}</label>
            <div>
                {isPassword ? <input type={showPwd ? "text" : "password"}/> : <input type="text"/> }
                {isPassword ? <PasswordEye onClick={pwdEyeswitch} isTrue={showPwd} /> : null}
            </div>
        </_.Input>
    );
};

export { GoogleLoginBtn, LoginInput };