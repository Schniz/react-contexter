var React, { PropTypes, Component } = require('react');

function getComponentName(Component) {
  return Component.constructor.name || "Component";
};

export function createContextor(contextTypesObject) {
  return function wrapWithContext(Component) {
    return class ContextedComponent {
      static contextTypes = contextTypesObject;
      displayName = `Contexted(${getComponentName(Component)})`;
      render() {
        return <Component {...this.context} {...this.props} />;
      }
    }
  };
}

export function contextor(contextTypesObject, Component) {
  return createContextor(contextTypesObject)(Component);
}

