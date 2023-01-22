import styled from "styled-components";

export const BgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    padding: 32px;
    gap: 32px;
    border-radius: 16px;

    background-color: #FFFFFF;

    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left:50%;

    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.1);
    & > p{
        font-size: 24px;
        font-weight: 700;
    }
    & > a{
        font-size: 16px;
        cursor: pointer;
    }
`;

export const GoogleBtn = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    padding: 8px 16px;

    background-color: #E6E6E6E6;
    border-radius: 888px;
    border: none;

    font-size: 20px;

    cursor: pointer;
        
    & > img{
        width: 18px;
        height: 18px;
    }
`;

export const BtnLong = styled.button`
    padding: 8px 16px;
    width: 100%;

    background-color: #000000;
    color: #FFFFFF;
    border-radius: 888px;
    border: none;

    font-size: 20px;

    cursor: pointer;
`;

export const Input = styled.div` 
    width: 100%;

    & > label{
        font-size: 16px;
        padding-left: 12px;
        padding-bottom: 4px;
        color: #00000080;
    }
    & > div{
        display: flex;
        align-items: center;
        padding: 12px;
        justify-content: space-between;
        border-radius: 12px;

        border: 1px solid #0000001A
    }
    & > div > input{
        width: 100%;
        border: none;
        outline: none;
        background-color: transparent;
        font-size: 20px;
    }
`;