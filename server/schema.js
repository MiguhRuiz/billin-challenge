import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLInputObjectType,
  GraphQLNonNull
} from 'graphql';
import db from './db';

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents a Article',
  fields: () => ({
    author: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    excerpt: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLString,
    },
    published: {
      type: GraphQLBoolean,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    title: {
      type: GraphQLString,
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      resolve() {
        return db.Article.find();
      },
    },
  }),
});

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Changes to Articles',
  fields: () => ({
    addArticle: {
      type: articleType,
      description: 'Create a New Article',
      args: {
        article: { type: articleInputType }
      },
      resolve: (value, {article}) => {
        const model = new db.Article(article)
        return model.save()
      }
    },
    deleteArticle: {
      type: articleType,
      description: 'Delete a single article',
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (value, {id}) => {
        return db.Article.findByIdAndRemove({ _id: id })
      }
    }
  })
})

const articleInputType = new GraphQLInputObjectType({
  name: 'ArticleInput',
  description: 'This represents a Article',
  fields: () => ({
    author: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    excerpt: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLString,
    },
    published: {
      type: GraphQLBoolean,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    title: {
      type: GraphQLString,
    },
  }),
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutations
});

export default Schema;
