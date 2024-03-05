import { ref, onValue, push, set } from "firebase/database";
import { useState } from "react";
import { db } from "./config.js"
import Question from "./Question.js";

const Naming = () => {
    const[done, setDone] = useState(false);
    const[nameSub, setName] = useState("");

    function submitName(e)
    {
        e.preventDefault();
        const form = e.target;
        const nameData = new FormData(form);
        const name = nameData.get("nameInput");

        const nameListRef = ref(db,"names");
        const newNameRef = push(nameListRef);
        set(newNameRef, name);
        console.log(name + " submitted!");
        setDone(true);
        setName(name);
    }

    return (
        <>
            {!done &&(
                <form method="post" onSubmit={submitName}>
                    <label>
                        <Question text="What's your name?"/>
                        <p/>
                        <input name="nameInput"/>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            )        
            }
            {done &&(
                <h2>
                    YOU SUBMITTED: {nameSub}!
                </h2>
            )}
        </>
    )
}

export default Naming;