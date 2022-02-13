import styled from "styled-components";
import PropTypes from "prop-types";
import { DisplayNameLabel, UserNameLabel } from ".";

function Chirp({ chirp }) {
    return (
        <StyledChirp>
            <Header>
                <DisplayNameLabel>{chirp.author.displayName}</DisplayNameLabel>
                <UserNameLabel>@{chirp.author.userName}</UserNameLabel>
            </Header>
            <Body>{chirp.message}</Body>
        </StyledChirp>
    );
}

const Header = styled.div`
    display: flex;
    grid-row: 1;
    padding: 10px;
`;

const Body = styled.div`
    padding: 10px;
`;

const StyledChirp = styled.div`
    grid-row: ${(props) => props.index};
    display: grid;
    grid-template-rows: 30% 70%;
    grid-template-columns: auto;
    background-color: whitesmoke;
    border-radius: 10px;
`;

Chirp.propTypes = {
    chirp: PropTypes.shape({
        author: PropTypes.shape({
            userName: PropTypes.string,
            displayName: PropTypes.string,
        }),
        message: PropTypes.string,
    }).isRequired,
};

export default Chirp;
