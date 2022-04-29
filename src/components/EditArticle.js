import "../styles/editArticle.css"
import Button from "./parts/Button"
import TextArea from "./parts/TextArea"

export default function EditArticle(props) {
    return (
        <div className="editArticle">
            <h3>{props.editMode === false ? 'Create article' : 'Edit article'}</h3>
            <TextArea
                textAreaPlaceholder={"Enter article content"}
                textAreaChange={(event) => {props.saveContent(event)}}
                value={props.articleContent}
            />
            <br></br>
            <Button 
                buttonOnSubmit = {props.saveArticle}
                buttonTitle = {props.editMode === false ? 'Create article' : 'Edit article'}
            />
     </div>
    )
}