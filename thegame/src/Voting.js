import Firebase from "firebase/compat/app";
import { useState, useEffect } from "react";


function Voting(props){
    //Variables
    //displays question
    const [question, setQn] = useState({
        id: "",
        text: "",
        optionA: "",
        optionB: ""
    });

    const updateText = () => {
        setQn(previousState => {
            return{...previousState, text: "etc"}
        });
    }

    const incrementA = () => {
        Firebase.database()
            .ref('question')
            .child(question.id)
            .child('optionA')
            .child('votes')
            .set(Firebase.database.ServerValue.increment(1));
    }

    const incrementB = () => {
        Firebase.database()
            .ref('question')
            .child(question.id)
            .child('optionA')
            .child('votes')
            .set(Firebase.database.ServerValue.increment(1));
    }

    //Does something when rendered
    useEffect(() => {

    }, [question]);

    return (
        <>
            <h1>Question: {question.text}</h1>
            <h3>{props.subtitle}</h3>
            <button 
                type="button"
                onClick={incrementA}>
                    {question.optionA}
            </button>
            <button 
                type="button"
                onClick={incrementB}>
                    {question.optionB}
            </button>
        </>
    )
}

export default Voting;