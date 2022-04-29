import Header from "./parts/Header"
import Footer from "./parts/Footer"

export default function Layout(props) {
    return (
        <>
            <Header />
                <div>{props.children}</div>
            <Footer />
        </>

    )
}