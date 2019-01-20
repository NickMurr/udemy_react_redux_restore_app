import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator/ErrorIndicator';

export default class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <ErrorIndicator />;
    }
    return children;
  }
}
