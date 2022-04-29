import "../../styles/textArea.css"
export default function TextArea(props) {
    return(
        <textarea
          placeholder = {props.textAreaPlaceholder}
          onChange = {props.textAreaChange}
          value = {props.value}
        /> 
          
    )
}