import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';
import * as actions from './redux/actions';
import * as commonActions from '../common/redux/actions';

export class BioPopUp extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    common: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor() {
    super();
    this.state = {
      expandedBioOpen: false
    };
  }

  componentDidMount() {
    this.setComponentState();
  }

  setComponentState() {
    this.setState({ expandedBioOpen: true });
  }

  renderExpandedBio() {
    const { bioBoxOpen } = this.props.common;
    const { toggleBioBox } = this.props.actions;
    const bioTransition =
          {
            entering: { transform: 'scale(0)' },
            entered: { transform: 'scale(1)' },
            exited: { transform: 'scale(0)' }
          };

    return (<Transition in={bioBoxOpen} mountOnEnter unmountOnExit timeout={{ entering: 0, exiting: 300 }}>
      {state => (<div className="expanded-bio" style={{ ...bioTransition[state] }}>
        <a role="button" tabIndex={0} className="exit-button fa fa-close" onClick={() => toggleBioBox()}>{''}</a>
        <h2>you can find me here...</h2>

        <div className="social">
          <a href="http://facebook.com/hiimneonian" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" />
            <p>find me on facebook.</p>
          </a>
          <a href="http://twitter.com/hiimneonian" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter" />
            <p>follow me on twitter.</p>
          </a>
          <a href="http://instagram.com/studiocadogan" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" />
            <p>follow my instagram.</p>
          </a>
        </div>
        {/*<h2>also...</h2>*/}

        {/*<div className="social more">*/}
          {/*<a rel="noopener noreferrer" target="_blank" href="https://medium.com/@antonypaulcadoganwhite">i write for medium.</a>*/}
          {/*<a rel="noopener noreferrer" target="_blank" href="http://instagram.com/studio_cadogan">see my instagram.</a>*/}

        {/*</div>*/}

      </div>)}
    </Transition>);
  }

  render() {
    return (

      this.renderExpandedBio()

    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
    common: state.common
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions, ...commonActions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BioPopUp);
