import * as _ from "../../styles/Write";

type props = {
  onClickSubmit: () => void;
  onClickNoSubmit: () => void;
};

const Submit = ({ onClickSubmit, onClickNoSubmit }: props) => {
  return (
    <_.SubmitContainer>
      <button onClick={onClickSubmit}>제출</button>
      <button onClick={onClickNoSubmit}>임시 저장</button>
      <button>맞춤법 검사</button>
    </_.SubmitContainer>
  );
};

export default Submit;
