import Input from "./parts/Input"
import Button from "./parts/Button"
import TextArea from "./parts/TextArea"

export default function Form(props) {
    let setName = props.setName;
    let setEmail = props.setEmail
    let setMessage = props.setMessage

    return (
        <form className="formWrapper">
                 <h1>Contact Us</h1>

                 <Input
                   fieldType = {"text"}
                   fieldPlaceholder = {"Enter your name"}
                   fieldOnChange = {(event) => setName(event.target.value)}
                 />

                 <Input
                    fieldType = {"email"}
                    fieldPlaceholder = {"Enter your email"}
                    fieldOnChange = {(event) => setEmail(event.target.value)}
                 />

                 <TextArea
                    textAreaPlaceholder = {"Enter your message"}
                    textAreaChange = {(event) => setMessage(event.target.value)}
                 />

                 <Button
                    buttonTitle = {"Submit"}
                    buttonOnSubmit = {props.handleSubmit}
                 />
            </form>
    )
}