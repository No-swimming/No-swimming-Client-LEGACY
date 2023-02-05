import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as _ from "../../styles/Write";
type valueType = {
  teacher_id: number;
  title: string;
  content: string;
};
type props = {
  value: valueType;
  setValue: Dispatch<SetStateAction<valueType>>;
  handleInputChange: (props: string) => (event: any) => void;
};

const BookWrite = ({ value, handleInputChange, setValue }: props) => {
  const [count, setCount] = useState<string>("");
  useEffect(() => {
    if (value.content.length - count.length > 1) {
      alert("복사붙여넣기는 불가능합니다")
      setValue({ ...value, ["content"]: count })
    }
    setCount(value.content)
  }, [value.content.length]);

  return (
    <_.WriteContainer>
      <_.Label>제목</_.Label>
      <input value={value.title} onChange={handleInputChange("title")} />
      <_.Label>내용</_.Label>
      <textarea value={value.content} onChange={handleInputChange("content")} />
      <_.CountContainer>
        <h3>{value.content.split(/\s+/).length - 1}단어</h3>
        <h3>{value.content.length}글자</h3>
        <p>공백 제외 {value.content.replace(/\s/gi, "").length}글자</p>
      </_.CountContainer>
    </_.WriteContainer>
  );
};

export default BookWrite;
