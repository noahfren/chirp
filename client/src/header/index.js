import styled from "styled-components";

function Header() {
    return <StyledHeader>chirp.</StyledHeader>
};

const StyledHeader = styled.div`
    grid-row: 1;
    grid-column: 1 / -1;
    padding: 10px;
    font-weight: bold;
    font-size: 36px;
`;

export default Header;
