import React, { useState } from "react";
import config from "./config.js"
import { initializeApp } from 'firebase';
import { useList } from 'react-firebase-hooks/database';
import { ref, getDatabase } from "firebase/database";

const app = initializeApp(config);
const db = getDatabase(app);

function GameState()
{
    const [snapshots, loading, error] = useList(ref(db, 'gamestate'));
    const [gameState, setGameState] = useState(0);

    return (
        <div>
            {error && <strong>Error: {error}</strong>}
            {loading && <strong>Loading status...</strong>}
            {!loading && snapshots &&(
                <h2>Status: {snapshots["gameState"]}</h2>
            ) }
        </div>
    )
}

export default GameState;