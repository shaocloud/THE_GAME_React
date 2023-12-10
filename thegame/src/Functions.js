import Firebase from "firebase"
import { useState, useEffect } from "react";


function Voting(){
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

    useEffect(() => {

    }, [question]);

    return (
        <>
        <h1>{question.text}</h1>
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

writeVote = () => {
    let ref = Firebase.database().ref('/');
}

getQuestion = () => {
    let ref = Firebase.database().ref('/');
    
}

export default functions;