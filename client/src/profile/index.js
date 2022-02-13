import styled from "styled-components";
import { DisplayNameLabel, UserNameLabel } from "../common";
import { useAuth } from "../common/hooks/useAuth";
import Page from "../common/Page";

import Timeline from "../common/Timeline";

const mockChirps = [
    {
        author: {
            userName: "noahfrenkel",
            displayName: "Noah Frenkel",
        },
        message: "Hi! Is this thing on?",
    },
    {
        author: {
            userName: "noahfrenkel",
            displayName: "Noah Frenkel",
        },
        message: "How bout them Wolverines",
    },
    {
        author: {
            userName: "shubbs",
            displayName: "Shelby Hubbell",
        },
        message: "That guy Noah is so annoying",
    },
    {
        author: {
            userName: "noahfrenkel",
            displayName: "Noah Frenkel",
        },
        message: "Hi! Is this thing on?",
    },
    {
        author: {
            userName: "noahfrenkel",
            displayName: "Noah Frenkel",
        },
        message: "How bout them Wolverines",
    },
    {
        author: {
            userName: "shubbs",
            displayName: "Shelby Hubbell",
        },
        message: "That guy Noah is so annoying",
    },
    {
        author: {
            userName: "noahfrenkel",
            displayName: "Noah Frenkel",
        },
        message: "Hi! Is this thing on?",
    },
    {
        author: {
            userName: "noahfrenkel",
            displayName: "Noah Frenkel",
        },
        message: "How bout them Wolverines",
    },
    {
        author: {
            userName: "shubbs",
            displayName: "Shelby Hubbell",
        },
        message: "That guy Noah is so annoying",
    },
    {
        author: {
            userName: "noahfrenkel",
            displayName: "Noah Frenkel",
        },
        message: "Hi! Is this thing on?",
    },
    {
        author: {
            userName: "noahfrenkel",
            displayName: "Noah Frenkel",
        },
        message: "How bout them Wolverines",
    },
    {
        author: {
            userName: "shubbs",
            displayName: "Shelby Hubbell",
        },
        message: "That guy Noah is so annoying",
    },

    {
        author: {
            userName: "noahfrenkel",
            displayName: "Noah Frenkel",
        },
        message: "Hi! Is this thing on?",
    },
    {
        author: {
            userName: "noahfrenkel",
            displayName: "Noah Frenkel",
        },
        message: "How bout them Wolverines",
    },
    {
        author: {
            userName: "shubbs",
            displayName: "Shelby Hubbell",
        },
        message: "That guy Noah is so annoying",
    },
];

function Profile() {
    const auth = useAuth();
    return (
        <Page>
            <StyledProfileHeader>
                <DisplayNameLabel>{auth.activeUser.displayName}</DisplayNameLabel>
                <UserNameLabel>@{auth.activeUser.userName}</UserNameLabel>
            </StyledProfileHeader>
            <Timeline chirps={mockChirps} />
        </Page>
    );
}

const StyledProfileHeader = styled.div`
    height: 50px;
    background-color: white;
    padding-bottom: 5px;
`;

export default Profile;
