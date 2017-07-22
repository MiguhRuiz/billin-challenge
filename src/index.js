import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route }  from 'react-router-dom'

import ArticlesView from './views/Articles'
import ArticleView from './views/Article'

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={ArticlesView} />
      <Route exact path='/:id' component={ArticleView} />
    </div>
  </HashRouter>,
  document.getElementById('root'),
);
