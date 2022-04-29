import "../styles/contact.css"
import Layout from "../components/Layout";
import Form from "../components/Form";
import DisplayData from "../components/DisplayData";
import { useState } from "react"; 
import { checkEmail } from "../services/checkEmail";
import { checkInput } from "../services/checkInput";
import { errorDialog } from "../services/errorDialog";

export default function Contact() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    
    const submitForm = (e) => {
        e.preventDefault();

        if(checkEmail(email) && checkInput(name) && checkInput(message)) {
            setIsSubmit(true)
        } else {
            let errorMessage = "";
            (!checkEmail(email)) ? errorMessage += "Email format invalid \n  <br>" : errorMessage = errorMessage;
            (!checkInput(name)) ? errorMessage += "Name can not be empty \n  <br> " : errorMessage = errorMessage;
            (!checkInput(message)) ? errorMessage += "Message field can not be empty \n" : errorMessage = errorMessage;
            errorDialog(errorMessage);              
            setIsSubmit(false)
        }
    }

    return (
        <Layout>
            {isSubmit  &&
                <DisplayData
                    message = {message}
                    email = {email}
                    name = {name}
                />
            }

            {!isSubmit  &&
                <Form
                    setName = {setName}
                    setEmail = {setEmail}
                    setMessage = {setMessage}
                    handleSubmit = {submitForm}
               />  
            }  
        </Layout>
    )
}