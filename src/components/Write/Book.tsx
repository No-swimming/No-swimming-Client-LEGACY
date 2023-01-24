import * as _ from "../../styles/Write";
const Book = () => {
  const teacher = ["a", "b", "담당선생님", "c"];
  return (
    <_.TopContainer>
      <div>
        <_.Label>선택한 책</_.Label>
        <_.Book>s</_.Book>
      </div>
      <div>
        <_.Label>담당 선생님</_.Label>
        <_.Select>
          <option selected disabled>
            담당 선생님
          </option>
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
