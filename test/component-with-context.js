import React, { PropTypes } from 'react';

export default class ComponentWithContext extends React.Component {
  static childContextTypes = {
    someString: PropTypes.string,
    someFunction: PropTypes.func,
  };

  static propTypes = {
    children: PropTypes.node,
  };

  getChildContext() {
    return {
      someString: "Hello",
    };
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

