import Voting from './Voting';
import Naming from './Naming';
import Skipping from './Skipping';
import IntroText from "./Intro.js";
import RewindText from './Rewind.js';


export default function Fields(props)
{
    let val = props.stateVal;

    console.log("Fields " + val);

    switch(val)
    {
        case 0:
            return(
                <>
                <h1>THE GAME</h1>
                is currently offline
                </>
            );
        case 1:
            return(
                <>
                You are playing
                <h1>THE GAME</h1>                
                </>
            );
        case 2:
            return(
                <>
                    Get ready to answer...
                </>
            );
        case 3:
            return(
                <Voting/>
            );
        case 4:
            return(
                <h1>
                    Thank you for voting!
                </h1>
            );
        case 5:
            return(
                <IntroText/>
            );
        case 6:
            return(
                <>
                <h1>THANK YOU</h1>
                for playing
                <h1>THE GAME</h1>
                </>
            );
        case 7:
            return(
                <Naming/>
            );
        case 8:
            return(
                <Skipping/>
            );
        case 9:
            return(
                <RewindText/>
            )
        default:
            return(
                <></>
            )
    }
}