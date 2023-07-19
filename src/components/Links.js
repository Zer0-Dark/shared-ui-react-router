import React from "react";
import { Link, NavLink } from "react-router-dom";
import articles from "../Data/articals";
function Links() {
    let articlesElements = articles.map(article => (
        <div className="title">
            <NavLink to={`${article.id}`}>{article.title}</NavLink>
        </div>
    ))
    return (
        <div className="titles">
            {articlesElements}
        </div>
    )
}

export default Links;