import React, { Component } from 'react';
import Card from './Card/card.js';
import './App.css';
import data from './data.js';
import srcImg from './helpers/srcImg.js';

class App extends Component {
  render() {
    const arrayList = data.map((card, index) => <Card key={index} {...card} />);
    return (
      <div className="root__inner">
        <img
          srcSet={srcImg("img/zen_logo.png")}
          className="logo"
          src="img/zen_logo.png"
          alt="Zen logo" />
        <div className="layout">
          {arrayList}
        </div>
      </div>
    );
  }
}

export default App;
