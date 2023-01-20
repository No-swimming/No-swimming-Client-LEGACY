import GoogleLoginBtn from "../components/Login";
import * as _ from "../styles/Login";

const Login = () => {
    return (
    <_.BgContainer>
        <p>로그인</p>
        <GoogleLoginBtn/>
        <a>관리자 로그인</a>
    </_.BgContainer>
    );
};

export default Login;
