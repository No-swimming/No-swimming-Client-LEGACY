import styled from "styled-components";

export const CardBg = styled.div<{backgroud:string}>`
    display:flex;
    gap: 12px;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 12px;
    background: ${props => props.backgroud};
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

export const CardBgMini = styled.div`
    display: flex;
    align-items: center;
    border-radius: 8px;
    width: 438px;
    height: 80px;
    padding: 4px;
    gap: 8px;
    background: #2D287B;
    color: white;
    font-weight: 700;
    & > img{
        height: inherit;
        border-radius: 4px;
    }
`

export const CardTitle = styled.p`
    font-weight: 700;
    font-size: 24px;
    &.trans{
        opacity: 0.5;
    }
`;

export const CardTitleMini = styled.p`
    font-weight: 700;
    font-size: 20px;
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

export const ButtonIcon = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`