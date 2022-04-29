import logo from "../../images/logo.png"
import "../../styles/header.css"
import Navigation from "./Navigation"

export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Logo" className="logo" />
            <Navigation />
        </div>
    )
}