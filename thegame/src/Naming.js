import { ref, onValue, push, set } from "firebase/database";
import { useState, useEffect } from "react";
import { db } from "./config.js"
import OptionButton from "./Button.js";
import Question from "./Question.js";

// https://stackoverflow.com/questions/70045141/how-to-increment-values-in-firebase-realtime-database-v9
// https://stackoverflow.com/questions/67312207/how-to-utilize-useeffect-hooks-to-fetch-data-from-firebase-realtime-database

const Naming = () => {
    //Variables
    //displays question

    function submitName(e)
    {
        e.preventDefault();
        const form = e.target;
        const nameData = new FormData(form);
        const name = nameData.get(nameInput);

        const nameListRef = ref(db,"names");
        const newNameRef = push(nameListRef);
        set(newNameRef, name);
        console.log(name + " submitted!");
    }

    return (
        <>
        <form method="post" onSubmit={submitName}>
            <label>
                <Question text="What's your name?"/>
                <p/>
                <input name="nameInput"/>
            </label>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Naming;