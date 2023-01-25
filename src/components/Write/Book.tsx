import * as _ from "../../styles/Write";
type props = {
  handleInputChange: (props: string) => (event: any) => void;
};
const Book = ({ handleInputChange }: props) => {
  const teacher = ["a", "b", "담당선생님", "c"];
  return (
    <_.TopContainer>
      <div>
        <_.Label>선택한 책</_.Label>
        <_.Book>s</_.Book>
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
