import React, { Component } from 'react';
import request from '../request';
import { ARTICLES_QUERY } from '../queries';
import './Articles.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Articles from '../components/Articles'

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
        <Articles articles={this.state.articles}/>
        <Footer />
      </div>
    );
  }
}

export default App;
