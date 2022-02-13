import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../common/hooks/useAuth";

function Header() {
    const auth = useAuth();
    return (
        <StyledHeader>
            <LogoLink to={"/"}>chirp.</LogoLink>
            <div className="right-items">
                {auth.activeUser ? (
                    <>
                        <NavLink to={"/profile"}>My Account</NavLink>
                        <NavLink
                            to={"/"}
                            onClick={() => {
                                auth.logOut();
                            }}
                        >
                            Log Out
                        </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to={"/login"}>Log In</NavLink>
                        <NavLink to={"/signup"}>Sign Up</NavLink>
                    </>
                )}
            </div>
        </StyledHeader>
    );
}

const StyledLink = styled(Link)`
    color: black;
    text-decoration: unset;
`;

const LogoLink = styled(StyledLink)`
    font-weight: bold;
    font-size: 36px;
`;

const NavLink = styled(StyledLink)`
    font-size: 20px;
    padding: 5px 10px;

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
    align-items: center;
    justify-content: space-between;
`;

export default Header;
