import * as _ from "../styles/SelectBox";

const OPTIONS = [
  { value: "apple", name: "사과" },
  { value: "banana", name: "바나나" },
  { value: "orange", name: "오렌지" },
];
const SelectBox = () => {
  return (
    <>
      <_.DropDownButton>
        {OPTIONS[0].name}
        <_.DownImg />
      </_.DropDownButton>
      <_.DownDiv>
        {OPTIONS.map((data) => {
          return <p>{data.name}</p>;
        })}
      </_.DownDiv>
    </>
  );
};

export default SelectBox;
