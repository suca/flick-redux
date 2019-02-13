import styled from "styled-components";
export const StyledTagList = styled.div`
    width: 450px;
    margin: 0 auto 50px;
    
    @media screen and (max-width: 700px) {
         min-width: 100%;
    }
`;
export const StyledTag = styled.div`
    height: 22px;
    line-height: 12px;
    text-align: center;
    width: auto;
    display: inline-block;
    padding: 0 8px 0 0;
    cursor: default;
    
`;
export const StyledLabelTag = styled.span`
    color: #000000;
    font-size: 12px;
    text-transform: uppercase;
    background: #ffffff;
    padding: 2px 4px;
    border: 33px;
    text-align: center;
`;

export const StyledIconClose = styled.i`
    visibility: hidden;
    font-size: 13px;
    float: right;
    top: -7px;
    right: -5px;
    position: relative;
    font-weight: 900;
    cursor: pointer;
    
    ${StyledTag}:hover & {
        visibility: visible;
    }
`;
