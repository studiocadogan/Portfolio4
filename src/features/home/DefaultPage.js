import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-default-page">
        <div className="section -title">
          <img alt="" className="header-circle" src="../images/me.jpg" />
          <h1>{"I'm Antony Cadogan"}</h1>
          <h2>UX Unicorn, Visual Designer, React Developer</h2>
        </div>
        <div className="section -bio">
          <h1>Bio</h1>
        </div>
        <div className="section -social">
          <h1>Social</h1>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
