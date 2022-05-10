import "../styles/editArticle.css"
import Button from "./parts/Button"
import TextArea from "./parts/TextArea"
import { useContext } from "react"
import ArticleContext from "../context/ArticleContext"

export default function EditArticle(props) {
    const {saveContent, saveArticle, editArticle} = useContext(ArticleContext)

    return (
        <div className="editArticle">
            <h3>{editArticle.edit === false ? 'Create article' : 'Edit article'}</h3>
            <TextArea
                textAreaPlaceholder={"Enter article content"}
                textAreaChange={(event) => {saveContent(event)}}
                value={props.articleContent}
            />
            <br></br>
            <Button 
                buttonOnSubmit = {saveArticle}
                buttonTitle = {editArticle.edit === false ? 'Create article' : 'Edit article'}
            />
     </div>
    )
}