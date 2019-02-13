import styled from "styled-components";

/**
 * Input Search
 * Serial of Style components for the Input Search control
 *
 */
export const StyledSearchForm = styled.form`
    width: 80%;
    margin-top: 50px;

    @media screen and (max-width: 700px) {
         min-width: 100%;
    }
`;

export const StyledInputContainer = styled.div`
    padding: 10px;
    margin: 10px auto;
    height: 48px;
    display: flex;
    align-items: flex-start;
    width: 500px;

    input {
        line-height: 22px;
        text-align: left;
        font-size: 27px;
        color: #000;
        padding: 5px 50px 5px 15px;
        align-self: stretch;
        border: 1px solid #b7b7b7;
        box-shadow: 5px 5px 20px 3px #b7b7b7;
        outline: none;
        width: 100%;
    }
    
    @media screen and (max-width: 700px) {
         width: 100%;
    }
`;

export const StyledSearchButton = styled.button`
    width: 40px
    height: 40px;
    background: transparent;
    border: none;
    outline: none;
    align-self: center;
    position: relative;
    left: -40px;

    > img {
        width: 100%   
        cursor: pointer;
    }
`;