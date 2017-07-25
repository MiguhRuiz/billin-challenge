export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`;

export const ARTICLE_QUERY = `{
  articles {
    author
    content
    id
    title
    tags
  }
}`

export const DELETE_ARTICLE_QUERY = function(id) {
  return `
    mutation {
      deleteArticle(id: "${id}") {
        id
      }
    }
  `
}

export const ADD_ARTICLE_QUERY = function(article) {
  return `
    mutation {
      addArticle(article: {
        title: "${article.title}",
        author: "${article.author}",
        content: "${article.content}",
        tags: "${article.tags}"
        excerpt: "${article.content.slice(0, 300)}"
      }) {
        id
        author
        excerpt
        title
      }
    }
  `
}