import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {
    const { articlesId } = useParams();
    const article = articles.find(article=>article.name===articlesId)
    if(!article){
        return(
            <NotFoundPage/>
        )
    }
    return (
        <>
        <h1>{article.title}</h1>
        {article.content.map(paragraph=>(
            <p key={paragraph}>{paragraph}</p>
        ))}</>
        

    );
}

export default ArticlePage;