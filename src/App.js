import Home from "./pages/Home"
import AboutUs  from "./pages/AboutsUs"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound";
import ArticleView from "./pages/ArticleView";
import { useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"


export default function App() {
  const [articles, setArticles] = useState([]);
  const [articleContent, setArticleContent] = useState("");
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
                      <Home
                        articles={articles}
                        setArticles={setArticles}
                        setArticleContent={setArticleContent}
                        articleContent={articleContent}
                     />}
             path="/" exact
          />
          <Route element={<AboutUs />} path="/about-us" exact />
          <Route element={<Contact />} path="/contact" exact />
          <Route element={<ArticleView />} path="/article/:id" exact />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}
