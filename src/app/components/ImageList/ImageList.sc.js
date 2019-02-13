import styled from "styled-components";

export const StyleImageContainer = styled.div`
   padding: 5px;
   margin: auto;
   width: 90%;
   display: flex;
   flex-wrap: wrap;
`;

export const StyledImageListContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
`;

export const StyledNoItems = styled.div`
    width: 100%;
    text-align: center;
    font-size: 32px;
    color: #9a9a9a;
`;

export const StyledLoading = styled.div`
    visibility: ${props => props.isLoading ? 'visible' : 'hidden'};
    text-align: center;
`;
