import { Link } from "react-router-dom";
import styled from "styled-components";
import { LogoImg } from "../assets";
import { theme } from "./theme";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  position: fixed;
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
  width: 100vw;
  justify-content: space-between;
  padding: 0px 7%;
  border-bottom: 1px solid ${theme.subGray};
  & > div {
    display: flex;
    gap: 24px;
  }
  /* 글씨 드래그 막기 */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Links = styled(Link)`
  text-decoration: none;
`;

export const Logo = styled.img.attrs({
  src: `${LogoImg}`,
})`
  width: 90px;
  height: 22px;
  margin-right: 36px;
  /* 이미지 드래그 금지 */
  -webkit-user-drag: none;
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 8px;
  & > img {
    width: 24px;
    height: 24px;
    /* 이미지 드래그 금지 */
    -webkit-user-drag: none;
  }
  & > p {
    font-size: 20px;
    color: ${theme.gray};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button`
  background-color: black;
  width: 85px;
  height: 42px;
  color: white;
  font-size: 20px;
  border-radius: 21px;
  text-align: center;
`;

export const NameContainer = styled.div`
  display: flex;
  color: black;
  gap: 12px;
  & > p {
    font-size: 20px;
  }
  & > img {
    border-radius: 50%;
    width: 28px;
    height: 28px;
  }
`;
