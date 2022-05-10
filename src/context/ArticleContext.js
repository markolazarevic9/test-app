import { useState, createContext} from 'react'
import Swal from 'sweetalert2';
import { deleteDialogConfig } from '../services/deleteDialogConfig';
import { succesDialog } from '../services/succesDialog';
import { checkInput } from '../services/checkInput';
import { getDate } from '../services/getDate';
import { errorDialog } from '../services/errorDialog';


const ArticleContext = createContext();


export const ArticleProvider = ({children}) => {

    const [articles, setArticles] = useState([]);
    const [articleContent, setArticleContent] = useState("");
    const [editArticle,setEditArticle] = useState({
        item:{},
        edit:false
      })
      const editArticleFun = (article) => {
        setEditArticle({
          article,
          edit:true
        })
      }
  
    const updateArticle = (id,newArticle) => {
        articles.map((article) => (article.id === id ? article.content = newArticle.content : article) )
    }
    // const saveContent = (event) => {
    //     setArticleContent(event.target.value)
    //   }

    const deleteArticle = (id) => {
        Swal.fire(deleteDialogConfig).then((result) => {
          if (result.isConfirmed) {
            setArticles(articles.filter((article) => article.id !== id))
            succesDialog("Article has been deleted");
          }
        })
      }

      const saveArticle = () => {
        if(checkInput(articleContent)) {
          let article = {
            id:articles.length,
            content:articleContent,
            date:getDate()
          }
  
          if(editArticle.edit === true) {
            updateArticle(editArticle.article.id,article)
            setArticleContent("");
            setEditArticle({edit:false})
            succesDialog('You have succesufuly updated article ' + editArticle.article.id)
          } else {
            setArticles([...articles,article]);
            setArticleContent("");
            succesDialog('You have succesufuly created an article')
          }
        } else {
          errorDialog('Article can not be empty')
        }   
      }

      const saveContent = (event) => {
        setArticleContent(event.target.value)
      }

    
     

    return <ArticleContext.Provider value={{
        articles,
        articleContent,
        deleteArticle,
        saveArticle,
        setArticleContent,
        saveContent,
        editArticle,
        setEditArticle,
        editArticleFun,
        
    }}>
        {children}
    </ArticleContext.Provider>
}


export default ArticleContext