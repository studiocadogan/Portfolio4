import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';
import * as actions from './redux/actions';

export class BioPopUp extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor() {
    super();
    this.state = {
      expandedBioOpen: false
    };
  }

  componentDidMount() {
    console.log(this.state.expandedBioOpen);
  }

  openExpandedContacts() {
    const { expandedBioOpen } = this.state;
    this.setState({ expandedBioOpen: !this.state.expandedBioOpen });
    console.log({ expandedBioOpen });
  }

  render() {
    const bioTransition =
        {
          entering: { transform: 'scale(0)' },
          entered: { transform: 'scale(1)' }
        };

    const imageTransition = !this.state.expandedBioOpen ? { transform: 'scale(.8)' } : {};

    return (
      <div className="section -title">

        <Transition in={this.state.expandedBioOpen} mountOnEnter unmountOnExit timeout={{ entering: 0, exiting: 300 }}>
          {state => (<div className="expanded-bio" style={{ ...bioTransition[state] }}>
            <a href="http://facebook.com/hiimneonian" rel="noopener noreferrer" target="_blank">Add me on Facebook</a>
            <a href="http://twitter.com/hiimneonian" rel="noopener noreferrer" target="_blank">Like me on Twitter</a>

          </div>)}
        </Transition>

        <a data={this.state.expandedBioOpen} role="button" tabIndex={0} onClick={() => this.openExpandedContacts()}><div style={{ ...imageTransition }} className={'header-circle'} /></a>


        <h1>{"I'm Antony Cadogan"}</h1>
        <h2>UX Unicorn, Visual Designer, React Developer</h2>
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
)(BioPopUp);
