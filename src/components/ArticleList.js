import Article from "./Article"
import ArticleContext from "../context/ArticleContext"
import { useContext } from "react"
import Spinner from "./parts/Spinner"

export default function ArticleList(props) {
    const { isLoading } = useContext(ArticleContext)

    if(!isLoading && (!props.articles || props.articles.length === 0)) {
        return <div className="articleList"><h1>No articles yet</h1></div>
    }

    return isLoading ? <Spinner /> : (  <div className="articleList">
    {props.articles.map((article) => (
        <Article 
         key={article.id}
         article = {article}
         articleContent = {article.content}
         articleDate = {article.date}
         articleId = {article.id}
         handleView = {props.handleView}
         />
    ))}
</div>)
}