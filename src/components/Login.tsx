import * as _ from "../styles/Login";
import { GoogleMiniIcn } from "../assets";
import { Eye28Regular } from "@fluentui/react-icons";

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

function LoginInput({label, isPassword}:LoginInputType){
    return(
        <_.Input>
            <label>{label}</label>
            <div>
                {isPassword ? <input type="password"/> : <input type="text"/> }
                {isPassword ? <Eye28Regular/> : null}
            </div>
        </_.Input>
    );
};

export { GoogleLoginBtn, LoginInput };