import React from "react";

function Article ({posts}) {
    const postsElements = posts.map((post) => {
        return (
            <article key={post.id}>
                <h3>{post.title}</h3>
                <small>{post.title}</small>
                  <p>{post.preview}</p>
            </article>
        );
    });
    return <div>{postsElements}</div>
}

export default Article;