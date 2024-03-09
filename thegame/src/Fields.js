import Voting from './Voting';
import Naming from './Naming';
import Skipping from './Skipping';
import IntroText from "./Intro.js";


export default function Fields(props)
{
    let val = props.stateVal;

    console.log("Fields " + val);

    switch(val)
    {
        case 5:
            return(
                <IntroText/>
            );
        case 3:
            return(
                <Voting/>
            );
        case 7:
            return(
                <Naming/>
            );
        case 8:
            return(
                <Skipping/>
            );
        default:
            return(
                <></>
            )
    }
}