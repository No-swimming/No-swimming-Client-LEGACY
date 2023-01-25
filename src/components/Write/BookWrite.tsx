import React from "react";
import * as _ from "../../styles/Write";
type valueType = {
  teacher_id: number;
  title: string;
  content: string;
};
type props = {
  value: valueType;
  handleInputChange: (props: string) => (event: any) => void;
};

const BookWrite = ({ value, handleInputChange }: props) => {
  return (
    <_.WriteContainer>
      <_.Label>제목</_.Label>
      <input value={value.title} onChange={handleInputChange("title")} />
      <_.Label>내용</_.Label>
      <textarea value={value.content} onChange={handleInputChange("content")} />
      <_.CountContainer>
        <h3>{value.content.split(/\s+/).length-1}단어</h3>
        <h3>{value.content.length}글자</h3>
        <p>공백 제외 {value.content.replace(/\s/gi, "").length}글자</p>
      </_.CountContainer>
    </_.WriteContainer>
  );
};

export default BookWrite;
