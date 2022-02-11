import styled from "styled-components";
import PropTypes from "prop-types";

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

const DisplayNameLabel = styled.div`
    font-weight: bold;
    padding-right: 5px;
`;

const UserNameLabel = styled.div`
    font-weight: lighter;
    padding-right: 5px;
`;

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
    }).isRequired
};

export default Chirp;
