import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route }  from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store'

import ArticlesView from './views/Articles'
import ArticleView from './views/Article'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route exact path='/' component={ArticlesView} />
        <Route exact path='/:id' component={ArticleView} /> 
      </div>
    </HashRouter> 
  </Provider>,
  document.getElementById('root'),
);
