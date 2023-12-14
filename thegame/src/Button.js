const OptionButton = (props) => {
    const text = props.text
    return (
        <button
        type="button"
        onClick={props.action}>
            {text}
        </button>
    )

}

export default OptionButton;