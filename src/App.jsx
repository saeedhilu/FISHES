import React, { Component } from 'react';
import './App.css';
import Products from './Products/Products.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Products />
      </div>
    );
  }
}
