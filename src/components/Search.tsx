import { Search32Regular } from "@fluentui/react-icons";
import { SearchBtn } from "../assets";
import * as _ from "../styles/Main";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  }
  const searchBook = () => {
    if (searchInput === "") alert("검색어를 입력해주세요")
    else navigate(`/search/${searchInput}`)
  }
  const onClickEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      searchBook();
    }
  }
  const data = ["쥰내편한 편의점", "동물농장", "정의란 이것이다"];
  return (
    <_.SearchContainer>
      <_.SearchInput>
        <input placeholder="제목, 작가 검색" value={searchInput} onChange={onChange} onKeyDown={onClickEvent} />
        <button onClick={searchBook}>
          <Search32Regular primaryFill="#BFBFBF" />
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
