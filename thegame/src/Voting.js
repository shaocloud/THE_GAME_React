import { ref, onValue, increment, update } from "firebase/database";
import { useState, useEffect } from "react";
import { db } from "./config.js"
import Question from "./Question.js";

// https://stackoverflow.com/questions/70045141/how-to-increment-values-in-firebase-realtime-database-v9
// https://stackoverflow.com/questions/67312207/how-to-utilize-useeffect-hooks-to-fetch-data-from-firebase-realtime-database

const Voting = () => {
    //Variables
    //displays question
    const [questionObj, setQuestionObj] = useState({});

    async function incrementA()
    {
        await update(ref(db,'question'),{
            votesA: increment(1)
        });
    }

    async function incrementB()
    {
        await update(ref(db,'question'),{
            votesB: increment(1)
        });
    }

    useEffect(() => {
        const updateQuestion = (data) =>
        {
            const newQuestionObj = {...questionObj};
    
            newQuestionObj.question = data.question;
            newQuestionObj.optionA = data.optionA;
            newQuestionObj.optionB = data.optionB;
    
            return setQuestionObj({
                question: data.question,
                optionA: data.optionA,
                optionB: data.optionB
            })
        }

        const query = ref(db, "question");
        return onValue(query, (snapshot)=>{
            const data = snapshot.val();
            if(snapshot.exists()){
                updateQuestion(data);
            }
        })
        
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(()=>{

    }, [questionObj])

    return (
        <>
        <Question text={questionObj.question}/>
        <p/>
        <button className="VoteBtn" onClick={incrementA}>{questionObj.optionA}</button>
        <br/>
        <button className="VoteBtn" onClick={incrementB}>{questionObj.optionB}</button>
        </>
    )
}

export default Voting;