import "../../styles/button.css"

export default function Button(props) {
    return (
        <button className={props.className} onClick={props.buttonOnSubmit}>
                {props.icon}
                {props.buttonTitle}
       </button>
    )
}