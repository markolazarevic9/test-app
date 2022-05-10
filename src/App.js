import Home from "./pages/Home"
import AboutUs  from "./pages/AboutsUs"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound";
import ArticleView from "./pages/ArticleView";
import { ArticleProvider } from "./context/ArticleContext";
import {BrowserRouter,Routes,Route} from "react-router-dom"


export default function App() {

  
  return (
    <>
    <ArticleProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" exact />
            <Route element={<AboutUs />} path="/about-us" exact />
            <Route element={<Contact />} path="/contact" exact />
            <Route element={<ArticleView />} path="/article/:id" exact />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </BrowserRouter>
      </ArticleProvider>
    </>
  );
}
