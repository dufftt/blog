import ArticlesList from "../components/ArticlesList";
import articles from "./article-content";
// import { Link } from "react-router-dom";
const ArticleListPage = () => {
    return (
        <>
        <h1>Articles</h1>
        
        <ArticlesList articles={articles}/>
        </>
        
    );
}

export default ArticleListPage;