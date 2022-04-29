import Article from "./Article"

export default function ArticleList(props) {
    if(!props.articles || props.articles.length === 0) {
        return <div className="articleList"><h1>No articles yet</h1></div>
    }
    return (
        <div className="articleList">
            {props.articles.map((article) => (
                <Article 
                 key={article.id}
                 article = {article}
                 articleContent = {article.content}
                 articleDate = {article.date}
                 articleId = {article.id}
                 handleView = {props.handleView}
                 handleDelete = {props.handleDelete}
                 handleEdit = {props.handleEdit}
                 />
            ))}
        </div>
    )
}