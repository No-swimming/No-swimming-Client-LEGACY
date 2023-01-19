import styled from "styled-components";
import { Background, LogoImg } from "../assets";
import { theme } from "./theme";

export const Container = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  min-height: 328px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Logo = styled.img.attrs({
  src: `${LogoImg}`,
})`
  /* 이미지 드래그 금지 */
  -webkit-user-drag: none;
  width: 193px;
  height: 46px;
  margin: 20vh 0px;
`;

/* 검색 컴포넌트 */
export const SearchContainer = styled.div`
  width: 40%;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
export const SearchInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid ${theme.subGray};
  box-shadow: 0px 0px 48px ${theme.subGray};
  border-radius: 16px;
  padding: 0px 20px;
  height: 60px;
  & > input {
    flex: 1;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    border: none;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: "#BFBFBF";
      font-size: 20px;
      line-height: 60px;
    }
  }

  & > button {
    cursor: pointer;
    width: 32px;
    height: 32px;
    background-color: white;
    border: none;
  }
`;

export const PopularContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: ${theme.gray};
  font-size: 16px;
  & > button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: ${theme.gray};
    font-size: 16px;
  }
`;
export const Popular = styled.div`
  display: flex;
  gap: 12px;
  flex: 1;
  height: 20px;
  & > p:first-child {
    cursor: default;
    font-weight: bold;
    min-width: 65px;
  }
  & > p {
    cursor: pointer;
  }
  & > div {
    height: 24px;
    width: 1px;
    background-color: #bfbfbf;
  }
`;
