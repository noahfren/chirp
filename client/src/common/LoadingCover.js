import styled from "styled-components";

export default function LoadingCover() {
    return (
        <StyledLoadingCover>
            <StyledLoadingContent>Loading...</StyledLoadingContent>
        </StyledLoadingCover>
    );
}

const StyledLoadingContent = styled.div`
    opacity: 1;
`;

const StyledLoadingCover = styled.div`
    grid-row: 1 / -1;
    grid-column: 1 / -1;

    background-color: rgba(211, 211, 211, 0.33);

    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 900;

    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
`;
