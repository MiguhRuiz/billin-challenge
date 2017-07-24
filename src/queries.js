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
