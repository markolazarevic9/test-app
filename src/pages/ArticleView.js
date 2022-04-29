import Layout from "../components/Layout";
import Button from "../components/parts/Button";
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";

export default function ArticleView() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { id, content, date } = state;

    return (
        <Layout>
            <div className="container">
                <h1>Article {id}</h1>
                <Button 
                    buttonOnSubmit={() => navigate("/")}
                    buttonTitle={'Back'}
                    icon={<FaArrowLeft color='white'/>}
                />
                <p> {content} </p>
                <span>Created: {date}</span>
            </div>
        </Layout>

    )
}