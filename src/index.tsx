import * as React from 'react';

class NoopComponent extends React.Component {
  public render() {
    return this.props.children;
  }
}

const exportsProxy = new Proxy(module.exports, {
  get: () => NoopComponent
});

module.exports = exportsProxy;