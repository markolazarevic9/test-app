import Layout from "../components/Layout"
import ArticleList from "../components/ArticleList"
import EditArticle from "../components/EditArticle";
import { getDate } from "../services/getDate";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { checkInput } from "../services/checkInput";
import { errorDialog } from "../services/errorDialog";
import { succesDialog } from "../services/succesDialog";
import { deleteDialogConfig } from "../services/deleteDialogConfig";
import Swal from 'sweetalert2'

export default function Home(props) {
    const navigate = useNavigate();
    const [editArticle,setEditArticle] = useState({
      item:{},
      edit:false
    })

    let articleContent = props.articleContent;
    let articles = props.articles;
    let setArticles = props.setArticles;
    let setArticleContent = props.setArticleContent;

    const openArticle = (id) => {
        const chosenArticle = articles.filter((article) => article.id === id)[0];
        navigate("/article/" + id, { state: {id:chosenArticle.id,content:chosenArticle.content,date:chosenArticle.date}})
    }

    const updateArticle = (id,newArticle) => {
        articles.map((article) => (article.id === id ? article.content = newArticle.content : article) )
    }

    const editArticleFun = (article) => {
      setEditArticle({
        article,
        edit:true
      })
    }

    // Fill text field with content to edit
    useEffect(() => {
      if(editArticle.edit === true) {
        setArticleContent(editArticle.article.content)
      }
    }, [editArticle])

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
      props.setArticleContent(event.target.value)
    }
  
    const deleteArticle = (id) => {
      Swal.fire(deleteDialogConfig).then((result) => {
        if (result.isConfirmed) {
          setArticles(articles.filter((article) => article.id !== id))
          succesDialog("Article has been deleted");
        }
      })
    }
  
    return(
        <Layout>
            <ArticleList
                articles={articles}
                handleDelete={deleteArticle}
                handleView={openArticle}
                handleEdit={editArticleFun}
            />
            <EditArticle
               saveContent={saveContent}
               saveArticle={saveArticle}
               articleContent={articleContent}
               editMode={editArticle.edit}
            />
      </Layout>
    )
}