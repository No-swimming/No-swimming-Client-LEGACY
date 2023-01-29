 import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as _ from "../../styles/Write";
type props = {
  handleInputChange: (props: string) => (event: any) => void;
};

const URL: string = "http://localhost:8080/book";

const Book = ({ handleInputChange }: props) => {
  const { bookInfo } = useParams();
  const teacher = ["a", "b", "담당선생님", "c"];
  const [bookData, setBookData] = useState({
    author: "",
    description: "",
    discount: "",
    image: "",
    isbn: "",
    link: "",
    pubdate: "",
    publisher: "",
    title: "",
  });

  const getBookData = async () => {
    await axios
      .get(`${URL}/1/1/${bookInfo}`, {
        data: {
          searchBook: `${bookInfo}`,
        },
      })
      .then((res) => {
        setBookData(res.data.data.items[0]);
      });
  };

  useEffect(() => {
    getBookData();
  }, [bookInfo]);

  return (
    <_.TopContainer>
      <div>
        <_.Label>선택한 책</_.Label>
        <_.Book>
          <img src={bookData.image} />
          <div>
            <p>{bookData.title}</p>
            <p>{bookData.author}</p>
          </div>
        </_.Book>
      </div>
      <div>
        <_.Label>담당 선생님</_.Label>
        <_.Select onChange={handleInputChange("teacher_id")}>
          <option value="">담당 선생님</option>
          {teacher.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </_.Select>
      </div>
    </_.TopContainer>
  );
};

export default Book;
