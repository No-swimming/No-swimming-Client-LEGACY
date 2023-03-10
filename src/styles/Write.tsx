import styled from "styled-components";
import { theme } from "./theme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 70px 13% 0px 13%;
  display: flex;
  flex-direction: column;
`;

export const TopContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #bfbfbf;
`;
export const Book = styled.div`
  gap: 8px;
  background-color: #2d287b;
  width: 438px;
  height: 90px;
  border-radius: 8px;
  color: white;
  padding: 4px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  & > img {
    height: 80px;
    border-radius: 4px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    & > p:first-child {
      font-weight: bold;
    }
    & > p:last-child {
      opacity: 0.5;
    }
  }
`;
export const Label = styled.p`
  color: ${theme.gray};
  font-size: 16px;
  margin-bottom: 4px;
`;

export const Select = styled.select`
  width: 286px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid ${theme.subGray};
  padding: 0px 8px;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;

export const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > input {
    height: 50px;
    border: 1px solid ${theme.subGray};
    border-radius: 8px;
    padding: 0px 8px;
    font-size: 20px;
    &:focus {
      outline: none;
    }
  }
  & > textarea {
    border: 1px solid ${theme.subGray};
    width: 99%;
    border-radius: 8px;
    padding: 8px;
    font-size: 20px;
    height: 426px;
    min-height: 50px;
    resize: vertical;
    &:focus {
      outline: none;
    }
  }
`;
export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
`;

export const SubmitContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  padding-bottom: 24px;
  & > button {
    cursor: pointer;
    background-color: ${theme.subGray};
    color: black;
    border: none;
    font-size: 20px;
    padding: 8px 16px;
    border-radius: 21px;
  }
  & > button:first-child {
    background-color: black;
    color: white;
  }
`;
