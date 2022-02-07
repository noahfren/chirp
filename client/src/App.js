import React from "react";

import "./App.css";

import Timeline from "./Timeline";

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
];

function App() {
    return (
        <div className="App">
            <Timeline chirps={mockChirps} />
        </div>
    );
}

export default App;
