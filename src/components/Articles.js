import React, { useState } from "react";
import { useParams } from "react-router-dom";
import articles from "../Data/articals";
import { useEffect } from "react";
function Articles() {
    let params = useParams();
    let [article, setArticle] = React.useState(null);
    console.log(params)
    console.log(articles)
    React.useEffect(() => {
        setArticle(articles[params.id])

    }, [params])

    if (article !== null) {
        return (
            <div className="article">

                <h1>{article.title}</h1>
                <p>{article.desc}</p>
            </div>
        )
    } else {
        return (
            <div className="article">

                <h1>{articles[0].title}</h1>
                <p>{articles[0].desc}</p>
            </div>
        )
    }



}
export default Articles;
