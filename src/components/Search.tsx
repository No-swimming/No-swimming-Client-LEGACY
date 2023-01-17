import { SearchBtn } from "../assets";
import * as _ from "../styles/Main";

const Search = () => {
  const data = ["쥰내편한 편의점", "동물농장", "정의란 이것이다"];
  return (
    <_.SearchContainer>
      <_.SearchInput>
        <input placeholder="제목, 작가 검색" />
        <button>
          <img src={SearchBtn} />
        </button>
      </_.SearchInput>
      <_.PopularContainer>
        <_.Popular>
          <p>인기도서</p>
          <div></div>
          {data.map((data) => (
            <p>{data}</p>
          ))}
        </_.Popular>
        <button>+ 더보기</button>
      </_.PopularContainer>
    </_.SearchContainer>
  );
};

export default Search;
