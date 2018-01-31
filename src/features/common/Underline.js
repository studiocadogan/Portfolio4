import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

export default class Underline extends Component {
  static propTypes = {
    timeout: PropTypes.number.isRequired,
    speed: PropTypes.number,
    thickness: PropTypes.number,
    origin: PropTypes.string,
  };

  static defaultProps = {
    speed: 300,
    thickness: 2,
    origin: 'left',
  }

  constructor() {
    super();
    this.state = {
      isLoaded: false
    };
  }

  componentDidMount() {
    this.loadUnderlines();
  }

  loadUnderlines() {
    const { timeout } = this.props;
    setTimeout(() => this.setState({ isLoaded: true }), timeout);
  }

  render() {
    const { speed, thickness, origin } = this.props;
    const lineStyle = { float: 'left', width: '99.99%', transition: `transform ${speed}ms`, borderBottom: `${thickness}px solid`, transformOrigin: `${origin} center` };
    const underLineStyle = { entering: { transform: 'scaleX(0)', color: 'transparent' }, entered: { transform: 'scaleX(1)' } };

    return (<div>
      <div style={{ width: '.01%', float: 'left', borderBottom: `${thickness}px solid transparent` }} />
      <Transition mountOnEnter unmountOnExit in={this.state.isLoaded} timeout={0}>{state =>
        <div style={{ ...lineStyle, ...underLineStyle[state] }} className="underline" />}
      </Transition>
    </div>
    );
  }
}
