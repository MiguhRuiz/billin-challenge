import React, { Component } from 'react';
import request from './request';
import { ARTICLES_QUERY } from './queries';
import './App.css'

import Header from './components/Header'

class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // Renders
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
