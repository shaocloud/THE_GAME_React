import Voting from './Voting';
import Naming from './Naming';
import Skipping from './Skipping';
import IntroText from "./Intro.js";

function Title()
{
    return(
        <>
        <h2>FIELD GOES HERE</h2>
        </>
    )
}

export default function Fields(props)
{
    let val = props.stateVal;
    switch(val)
    {
        case 5:
            return(
                <>
                    <Title/>
                    <IntroText/>
                </>
            );
            break;
        case 3:
            return(
                <>
                    <Title/>
                    <Voting/>
                </>
            );
            break;
        case 7:
            return(
                <>
                    <Title/>
                    <Naming/>
                </>
            );
            break;
        case 8:
            return(
                <>
                    <Title/>
                    <Skipping/>
                </>
            );
            break;
        default:
            return(
                <>
                    <Title/>
                </>
            )
            break;
    }
}