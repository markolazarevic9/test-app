export default function DisplayData(props) {
    return (
        <div className="displayContainer">
            <h1>Thank you!</h1>
            <h3>Your Name: {props.name}</h3>
            <h3>Your email: {props.email}</h3>
            <h3>Your Message: {props.message}</h3>
        </div>
    )
}