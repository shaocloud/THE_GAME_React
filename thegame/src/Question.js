const Question = (props) =>
{
    const qnText = props.text;
    return (
        <h1 className="Question">{qnText}</h1>
    )
}
export default Question;