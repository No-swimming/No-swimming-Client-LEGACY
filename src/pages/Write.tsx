import * as _ from "../styles/Write";
import Header from "../components/Header";
import Book from "../components/Write/Book";
import BookWrite from "../components/Write/BookWrite";
import { useState } from "react";
type valueType = {
  teacher_id: number;
  title: string;
  content: string;
};
const Write = () => {
  const [value, setValue] = useState<valueType>({
    teacher_id: 0,
    title: "",
    content: "",
  });

  const handleInputChange = (props: string) => (event: any) => {
    setValue({ ...value, [props]: event.target.value });
  };

  return (
    <>
      <Header />
      <_.Container>
        <h1>독서록 작성</h1>
        <Book handleInputChange={handleInputChange} />
        <BookWrite value={value} handleInputChange={handleInputChange} />
      </_.Container>
    </>
  );
};

export default Write;
