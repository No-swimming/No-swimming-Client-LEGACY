import styled from "styled-components";

export const CardBg = styled.div`
    display:flex;
    gap: 12px;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 12px;
    background: #2D287B;
    color: #FFFFFF;
    width: 650px;
    height: 200px;
    & > div > div{
        display:flex;
        gap: 8px;
        align-items: center;
    }
    & > div{
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    & > img{
        width: 124px;
        border-radius:4px;
    }
`;

export const CardTitle = styled.p`
    font-weight: 700;
    font-size: 24px;
    &.trans{
        opacity: 0.5;
    }
`;

export const CardBody = styled.p`
    font-weight: 400;
    font-size: 20px;
    opacity: 0.5;
`;

export const ButtonBlack = styled.button`
    display:flex;

    padding: 8px 16px;
    background: #0000007f;
    border-radius: 99px;
    font-size: 20px;
    color: #FFFFFF;
    border: none;
    &.icon{
        padding: 8px 8px;
    }
`;