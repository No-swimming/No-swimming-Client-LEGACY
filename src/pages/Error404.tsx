import styled from "styled-components";
import { theme } from "../styles/theme";

const Error404 = () => {
  return (
    <Container>
      <h1>DON'T PANIC!</h1>
      <p>404 Not Found</p>
      <p>페이지를 찾을 수 없습니다.<br />
        접속하려는 페이지를 사용할 수 없거나,<br />
        주소가 잘못되었을 수 있습니다.</p>
    </Container>
  )
}

export default Error404;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  &>h1{
    font-size: 48px;
  }
  &>p:first-of-type{
    color : ${theme.gray};
    font-weight: bold;
  }
`