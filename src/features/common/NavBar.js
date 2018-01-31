import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class NavBar extends Component {
    static propTypes = {
      common: PropTypes.object.isRequired,
      actions: PropTypes.object.isRequired,
    };

    constructor() {
      super();
      this.state = { isHovered: false,
        routes: [
          { title: 'Studio Cadogan', url: '/' },
          { title: 'projects', url: '/projects' },
          { title: 'blog', url: '/blog' },
          { title: 'about', url: '/about' }]
      };
    }

    componentDidMount() {
      this.props.actions.toggleBioBox();
    }

    renderURLs() {
      return this.state.routes.map(
        route => (<div className="nav-link" key={this.state.routes.indexOf(route)}>
          <Link to={`${route.url}`}>{`${route.title}`}</Link></div>));
    }


    renderMenu() {
      const onMouseLeave = () => { this.setState({ isHovered: false }); };
      const { toggleBioBox } = this.props.actions;

      return (
        <div onMouseEnter={() => this.setState({ isHovered: true })} onMouseLeave={() => onMouseLeave()} className="common-nav-bar">
          {this.renderURLs()}
          <div className="nav-link"><a role="button" tabIndex={0} onClick={() => toggleBioBox()}>Get in Touch</a></div>
        </div>);
    }

    render() {
      return this.renderMenu();
    }
}

function mapStateToProps(state) {
  return {
    common: state.common
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
)(NavBar);

