import Layout from "../components/Layout"
import ArticleList from "../components/ArticleList"
import EditArticle from "../components/EditArticle";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useContext } from "react";
import ArticleContext from "../context/ArticleContext";

export default function Home(props) {
    const {articles, articleContent, setArticleContent,editArticle} = useContext(ArticleContext) 
    const navigate = useNavigate();
   

  
    const openArticle = (id) => {
        const chosenArticle = articles.filter((article) => article.id === id)[0];
        navigate("/article/" + id, { state: {id:chosenArticle.id,content:chosenArticle.content,date:chosenArticle.date}})
    }

    const updateArticle = (id,newArticle) => {
        articles.map((article) => (article.id === id ? article.content = newArticle.content : article) )
    }

    // Fill text field with content to edit
    useEffect(() => {
      if(editArticle.edit === true) {
        setArticleContent(editArticle.article.content)
      }
    }, [editArticle])

    
  
    return(
        <Layout>
            <ArticleList
                articles={articles}
                handleView={openArticle}
            />
            <EditArticle
               articleContent={articleContent}
               editMode={editArticle.edit}
            />
      </Layout>
    )
}