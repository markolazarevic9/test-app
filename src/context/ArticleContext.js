import { useState, createContext} from 'react'
import Swal from 'sweetalert2';
import { deleteDialogConfig } from '../services/deleteDialogConfig';
import { succesDialog } from '../services/succesDialog';
import { checkInput } from '../services/checkInput';
import { getDate } from '../services/getDate';
import { errorDialog } from '../services/errorDialog';
import { useEffect } from 'react';

const ArticleContext = createContext();


export const ArticleProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
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
  
    useEffect(() => {
      fetchArticles()
    },[])

    const fetchArticles = async () => {
      const response = await fetch(`/articles?_sort=id&_order=desc`)
      const data = await response.json();
      setArticles(data)
      setIsLoading(false)
    }

    const addArticle = async (newArticle) => {
      const response = await fetch('/articles', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(newArticle)
      })

      const data = await response.json();
      setArticles([data,...articles]);
    }
    const updateArticle = (id,newArticle) => {
        articles.map((article) => (article.id === id ? article.content = newArticle.content : article) )
        updateArticleReq(id,newArticle);
    }

    const updateArticleReq = async (id, newArticle) => {
      const response = await fetch(`/articles/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(newArticle)
      })

      const data = await response.json() 
      articles.map((article) => (article.id === id ? {...article,...data} : article) )
    }
    // const saveContent = (event) => {
    //     setArticleContent(event.target.value)
    //   }

    const deleteArticle = async (id) => {
        Swal.fire(deleteDialogConfig).then((result) => {
          if (result.isConfirmed) {
             deleteArticleReq(id);

            setArticles(articles.filter((article) => article.id !== id))
            succesDialog("Article has been deleted");

          }
        })
      }
    const deleteArticleReq = async (id) => {
          await fetch(`/articles/${id}`, { method: 'DELETE'})
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
            addArticle(article)
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
        isLoading
        
    }}>
        {children}
    </ArticleContext.Provider>
}


export default ArticleContext