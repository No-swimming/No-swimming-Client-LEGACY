import styled from "styled-components";
import { DropDownImg } from "../assets";
import { theme } from "./theme";

export const DropDownButton = styled.button`
  cursor: pointer;
  height: 44px;
  width: 286px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 9px;
  font-size: 20px;
  color: ${theme.gray};
`;

export const DownImg = styled.img.attrs({
  src: `${DropDownImg}`,
})`
  width: 24px;
  height: 24px;
`;

export const DownDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  margin: 0px 13px 0px 3px;
  background-color: #ebebeb;
  z-index: 2;
  font-size: 16px;
  color: ${theme.gray};
  box-sizing: border-box;
  & > p {
    padding: 2px 10px;
    height: 30px;
    line-height: 30px;
  }
  & > p:hover {
    background-color: white;
  }
`;
