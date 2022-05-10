import "../styles/article.css"
import { useContext } from "react"
import ArticleContext from "../context/ArticleContext"
import {FaTimes} from "react-icons/fa"
import {FaEdit} from "react-icons/fa"
import { breakContent } from "../services/breakContent"
import Button from "./parts/Button"

export default function Article(props) {
    const {deleteArticle, editArticleFun} = useContext(ArticleContext)
    return (
        <div className="article" >
            <Button
                 className={'edit'}
                 buttonOnSubmit={() => editArticleFun(props.article)}
                 icon={ <FaEdit color="white"/>}
            />
              <Button
                 className={'close'}
                 buttonOnSubmit={() =>deleteArticle(props.articleId)}
                 icon={<FaTimes color="white"/>}
            />
            
            <p className="content" onClick={() => props.handleView(props.articleId)}>
                {breakContent(props.articleContent)}
            </p>
           
            <span className="date">{props.articleDate}</span>
        </div>
            
    )
}