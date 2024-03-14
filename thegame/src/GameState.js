import { db } from "./config.js"
import { useList } from 'react-firebase-hooks/database';
import { ref } from "firebase/database";
import Fields from './Fields';

function GameState()
{
    const [snapshots, loading, error] = useList(ref(db, 'gamestate'));
    const dict = {
        0: "CONNECTING",
        1: "WAITING FOR QN",
        2: "QUESTION READY",
        3: "VOTING",
        4: "RESULTS",
        5: "INTRO",
        6: "ENDING",
        7: "NAMING",
        8: "SKIP"
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
                <>
                <Fields stateVal={snapshots[0].val()}/>
                </>
            ) }
        </div>
    )
}

export default GameState;