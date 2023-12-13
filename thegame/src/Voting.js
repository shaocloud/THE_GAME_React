
import config from "./config.js"
import { ref, getDatabase, onValue } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { useObject } from 'react-firebase-hooks/database';
import { useState, useEffect } from "react";


const app = initializeApp(config);
const db = getDatabase(app);

function Voting(){
    const [snapshot, loading, error] = useObject(ref(db, 'question'));
    //Variables
    //displays question
    const [question, setQn] = useState({
        id: "",
        text: "",
        optionA: "",
        optionB: ""
    });

    const updateText = (txt) => {
        setQn(previousState => {
            return{...previousState, text: txt}
        });
    }

    const incrementA = () => {/*
        db.ref('question')
            .child(question.id)
            .child('optionA')
            .child('votes')
            .set(db.ServerValue.increment(1));*/
    }

    const incrementB = () => {
        /*
        db.ref('question')
            .child(question.id)
            .child('optionA')
            .child('votes')
            .set(db.ServerValue.increment(1));*/
    }

    function getQuestion(){
        return 
    }

    useEffect(() => {

    },[])

    return (
        <>
        {error && <strong>Error: {error}</strong>}
        {loading && <span>Value: Loading...</span>}
        {snapshot && <span>Value: {snapshot.val()["question"]}</span>}
        <p/>
            <button 
                type="button">
                    {snapshot.val()["optionA"]}
            </button>
            <button 
                type="button">
                    {snapshot.val()["optionB"]}
            </button>
        </>
    )
}

export default Voting;