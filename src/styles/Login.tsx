import styled from "styled-components";

export const BgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    gap: 32px;
    border-radius: 16px;

    font-size: 24px;

    background-color: #FFFFFF;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.1);
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