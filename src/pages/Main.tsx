import Header from "../components/Header";
import Search from "../components/Search";
import * as _ from "../styles/Main";

const Main = () => {
  return (
    <>
      <Header/>
      <_.Container>
        <_.Logo />
        <Search />
      </_.Container>
    </>
  );
};

export default Main;
