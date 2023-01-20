import * as _ from "../styles/Login";
import { GoogleMiniIcn } from "../assets";

function GoogleLoginBtn(){
        return(
            <_.GoogleBtn>
                <img src={GoogleMiniIcn}/>
                Google로 로그인
            </_.GoogleBtn>
    );
};

export default GoogleLoginBtn;