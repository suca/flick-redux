import styled from "styled-components";
import LogoImage from "./placeholder-image.png";

const maxWidthSize = '240px';

export const StyledImageContainer = styled.div`
    height: 300px;
    width: 200px;
    text-align: center;
    position: relative;
    flex-grow: 1; 
    min-width: calc(100% / 3);
    box-shadow: inset 0 0 0 2px #ffffff;
    padding: 30px 0;
      
    span {
        color: #00000080;
        font-size: 11px;
        font-weight: 700;
        font-style: italic;
    }
    
    @media screen and (max-width: 700px) {
        min-width: calc(100% / 2);
    }
    @media screen and (max-width: 460px) {
        min-width: 100%;
    }
    
    &:nth-child(1) {
        width: 100%;
    }
`;
export const StyledPlaceholderImage = styled.img.attrs({
    src: LogoImage,
})`
    max-width: 100%;
    max-height: 100%;
`;
export const StyledRealImage = styled.img.attrs({
    src: props => props.url,
    alt: props => props.alt,
    onClick: props => props.onClick,
})`
    max-width: 100%;
    max-height: 60%;
    cursor: pointer;
`;
export const StyledDataFrame = styled.div`
    width: 240px;
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 20px 0;

    > div {
        width: ${maxWidthSize};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 20px
    }
`;
export const StyledLink = styled.div`
    color: black;
    font-size: 12px;
    display: flex;
    
    a {
        width: ${maxWidthSize};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
export const StyledTitle = styled.div`
    color: #252525;
    font-size: 12px;
`;
export const StyledTags = styled.div`
    color: #252525;
    font-size: 12px;
`;
export const StyledOwner = styled.div`
    color: #252525;
    font-size: 12px;
`;
export const StyledTakenDate = styled.div`
    color: #252525;
    font-size: 12px;
`;
