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
            break;
        case 3:
            return(
                <Voting/>
            );
            break;
        case 7:
            return(
                <Naming/>
            );
            break;
        case 8:
            return(
                <Skipping/>
            );
            break;
        default:
            return(
                <></>
            )
            break;
    }
}