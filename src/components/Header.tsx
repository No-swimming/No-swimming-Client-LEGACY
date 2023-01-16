import { Link } from "react-router-dom";
import { BestSeller, BookShelf, MyBook, Profile } from "../assets";
import * as _ from "../styles/Header";

const Header = () => {
  /* 토큰이 있나없나 확인을 대체하는 임시 코드 */
  const token = false;
  return (
    <_.HeaderContainer>
      <div>
        <_.Links to="/">
          <_.Logo />
        </_.Links>
        <_.Links to="/">
          <_.TitleContainer>
            <img src={BestSeller} />
            <p>인기 도서</p>
          </_.TitleContainer>
        </_.Links>
        <_.Links to="/">
          <_.TitleContainer>
            <img src={BookShelf} />
            <p>책꽃이</p>
          </_.TitleContainer>
        </_.Links>
        <_.Links to="/">
          <_.TitleContainer>
            <img src={MyBook} />
            <p>내 독서록</p>
          </_.TitleContainer>
        </_.Links>
      </div>
      {token ? (
        <_.Links to="/">
          <_.Button>로그인</_.Button>
        </_.Links>
      ) : (
        <_.Links to="/">
          <_.NameContainer>
            <p>김이름</p>
            <img src={Profile} />
          </_.NameContainer>
        </_.Links>
      )}
    </_.HeaderContainer>
  );
};

export default Header;
