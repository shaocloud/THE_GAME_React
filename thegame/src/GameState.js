import React, { useState } from "react";
import config from "./config.js"
import { initializeApp } from 'firebase/app';
import { useList } from 'react-firebase-hooks/database';
import { ref, getDatabase, onValue } from "firebase/database";

const app = initializeApp(config);
const db = getDatabase(app);

function GameState()
{
    const [snapshots, loading, error] = useList(ref(db, 'gamestate'));
    const dict = {
        0: "CONNECTING",
        1: "WAITING FOR QN",
        2: "QUESTION READY",
        3: "VOTING",
        4: "RESULTS"
    }

    function convertToState(i)
    {
        return dict[i];
    }

    return (
        <div>
            {error && <strong>Error: {error}</strong>}
            {loading && <strong>Loading status...</strong>}
            {!loading && snapshots &&(
                <h2>Status: {convertToState(snapshots[0].val())}</h2>
            ) }
        </div>
    )
}

export default GameState;