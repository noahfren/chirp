import styled from "styled-components";

export const DisplayNameLabel = styled.div`
    font-weight: bold;
    padding-right: 5px;
`;

export const UsernameLabel = styled.div`
    font-weight: lighter;
    padding-right: 5px;
`;

export const StyledLabel = styled.label`
    font-size: 16px;
    width: 50%;
    text-align: left;
`;

export const StyledInput = styled.input`
    margin: 5px;
    font-size: 16px;
    width: 50%;
`;

export const StyledSubmitInput = styled(StyledInput)`
    width: 100px;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
