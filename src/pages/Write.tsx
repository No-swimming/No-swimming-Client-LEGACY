import * as _ from "../styles/Write";
import Header from "../components/Header";
import Book from "../components/Write/Book";
import BookWrite from "../components/Write/BookWrite";
import { useState } from "react";

const Write = () => {
  const [value, setValue] = useState({
    teacher_id: 0,
    title: "",
    content: "",
  });
  const HandleInputChane =
    (props: any) => (e: React.ChangeEventHandler<HTMLInputElement>) => {
      setValue({ ...value, [props]: e.target.value });
    };
    
  return (
    <>
      <Header />
      <_.Container>
        <h1>독서록 작성</h1>
        <Book />
        <BookWrite />
      </_.Container>
    </>
  );
};

export default Write;
