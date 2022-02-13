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

function Home() {
    return (
        <Page>
            <Timeline chirps={mockChirps} />
        </Page>
    );
};

export default Home;
