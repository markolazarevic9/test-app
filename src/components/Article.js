import "../styles/article.css"

import {FaTimes} from "react-icons/fa"
import {FaEdit} from "react-icons/fa"
import { breakContent } from "../services/breakContent"
import Button from "./parts/Button"

export default function Article(props) {
    return (
        <div className="article" >
            <Button
                 className={'edit'}
                 buttonOnSubmit={() => props.handleEdit(props.article)}
                 icon={ <FaEdit color="white"/>}
            />
              <Button
                 className={'close'}
                 buttonOnSubmit={() => props.handleDelete(props.articleId)}
                 icon={<FaTimes color="white"/>}
            />
            
            <p className="content" onClick={() => props.handleView(props.articleId)}>
                {breakContent(props.articleContent)}
            </p>
           
            <span className="date">{props.articleDate}</span>
        </div>
            
    )
}