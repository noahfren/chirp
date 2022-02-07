import React from "react";
import styled from "styled-components";

function UnstyledChirp({ chirp }) {
    return (
        <>
            <Header>
                <DisplayNameLabel>{chirp.author.displayName}</DisplayNameLabel>
            </Header>
        </>
    );
}

const DisplayNameLabel = styled.div`
    font-weight: bold;
    padding: 5px;
`;

const UserNameLabel = styled.div`
    font-weight: lighter;
    padding: 5px;
`;

const Header = styled.div`
    display: flex;
    grid-row: 1;
`;

const Body = styled.div`
    padding: 10px;
`;

const Chirp = styled(UnstyledChirp)`
    grid-row: ${(props) => props.index};
    display: grid;
    grid-template-rows: 30% 70%;
    grid-template-columns: auto;
`;

export default Chirp;
