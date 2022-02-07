import React from "react";
import styled from "styled-components";
import Chirp from "./Chirp";

function UnstyledTimeline({ chirps }) {
    return chirps.map((chirp, i) => <Chirp chirp={chirp} index={i} key={`chirp-${i}`} />);
}

const Timeline = styled(UnstyledTimeline)`
    display: grid;
    grid-template-rows: repeat(${(props) => props.chirps.lenght}, 100px);
    grid-template-columns: 500px;
`;

export default Timeline;
