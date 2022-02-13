import styled from "styled-components";
import PropTypes from "prop-types";
import Chirp from "./Chirp";

function Timeline({ chirps }) {
    return (
        <StyledTimeline rows={chirps.length}>
            {chirps.map((chirp, i) => (
                <Chirp chirp={chirp} index={i} key={`chirp-${i}`} />
            ))}
        </StyledTimeline>
    );
}

const StyledTimeline = styled.div`
    display: grid;
    grid-template-rows: repeat(${(props) => props.rows}, 100px);
    row-gap: 10px;
    overflow-y: scroll;
`;

Timeline.propTypes = {
    chirps: PropTypes.array.isRequired,
};

export default Timeline;
