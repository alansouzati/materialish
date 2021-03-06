import React, { Component } from 'react';
import Ripple from '../ripple/ripple';
import PropTypes from 'prop-types';

export default class IconButton extends Component {
  render() {
    const { className = '', ripple = true, children, ...props } = this.props;

    return (
      <button
        className={`mt-iconButton ${className}`}
        {...props}
        onClick={this.onClick}>
        {children}
        {ripple && <Ripple ref={this.getRippleRef} />}
      </button>
    );
  }

  getRippleRef = component => {
    this.rippleComponent = component;
  };

  onClick = e => {
    const { onClick } = this.props;

    if (this.rippleComponent) {
      this.rippleComponent.onClick(e);
    }

    if (onClick) {
      onClick(e);
    }
  };
}

IconButton.propTypes = {
  ripple: PropTypes.bool,
  className: PropTypes.string,
};
