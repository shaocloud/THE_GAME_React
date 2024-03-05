import Voting from './Voting';
import Naming from './Naming';
import Skipping from './Skipping';
import IntroText from "./Intro.js";

function Title(props)
{
    console.log("Title " + props.val);

    return(
        <>
        <h2>FIELD GOES HERE</h2>
        <h3>{props.val}</h3>
        </>
    )
}

export default function Fields(props)
{
    let val = props.stateVal;

    console.log("Fields " + val);

    switch(val)
    {
        case 5:
            return(
                <>
                    <Title val={val}/>
                    <IntroText/>
                </>
            );
            break;
        case 3:
            return(
                <>
                    <Title val={val}/>
                    <Voting/>
                </>
            );
            break;
        case 7:
            return(
                <>
                    <Title val={val}/>
                    <Naming/>
                </>
            );
            break;
        case 8:
            return(
                <>
                    <Title val={val}/>
                    <Skipping/>
                </>
            );
            break;
        default:
            return(
                <>
                    <Title val={val}/>
                </>
            )
            break;
    }
}