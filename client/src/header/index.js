import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
    return <StyledHeader>
        <StyledLogoLink to={"/"}>chirp.</StyledLogoLink>
        <StyledNavLink to={"/profile"}>My Account</StyledNavLink>
    </StyledHeader>
};

const StyledLink = styled(Link)`
    color: black;
    text-decoration: unset;
`;

const StyledLogoLink = styled(StyledLink)`
    font-weight: bold;
    font-size: 36px;
    padding-right: 20px;
`;

const StyledNavLink = styled(StyledLink)`
    font-size: 20px;
    align-self: center;

    &:hover {
        text-decoration: underline;
    }
`;

const StyledHeader = styled.div`
    grid-row: 1;
    grid-column: 1 / -1;
    padding: 10px;
    z-index: 1000;
    display: flex;
    align-content: center;
`;

export default Header;
