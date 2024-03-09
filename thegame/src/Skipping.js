import { ref, onValue, increment, update } from "firebase/database";
import { useState, useEffect } from "react";
import { db } from "./config.js";

const Skipping = () => {
    const [skipVal, sendSkip] = useState({});

    async function sendSkipVal()
    {
        await update(ref(db,'skip'),{
            skip: increment(1)
        });
    }

    useEffect(()=>{
        const getVal = (data) =>
        {
            const newVal = {...skipVal};
            newVal.skip = data.skip;

            return sendSkip({
                skip: data.skip
            })
        }

        const query = ref(db, 'skip');
        return onValue(query, (snapshot)=>{
            const data = snapshot.val();
            if(snapshot.exists()){
                getVal(data);
            }
        })       
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(()=>{

    }, [skipVal])

    return(
        <>
        <h2>PRESS TO SKIP!</h2>
        <button className="VoteBtn" onClick={sendSkipVal}>SKIP</button>
        </>
    )
}
export default Skipping;