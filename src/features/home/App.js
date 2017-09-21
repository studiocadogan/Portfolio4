import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../common/NavBar';
import Bio from './BioPopUp';
import Underline from "../common/Underline";

/*
  This is the root component of your app. Here you define the overall layout
  and the container of the react router. The default one is a two columns layout.
  You should adjust it according to the requirement of your app.
*/
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: 'No content.',
  };

  render() {
    return (
      <div className="home-app">
        <Nav />
        <Bio />
          <Underline timeout={1000} thickness={3} speed={300} origin="left" />

        <div className="page-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
