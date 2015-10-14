export default contexter;
contexter.createContexter = createContexter;
contexter.contexter = contexter;

import React, { PropTypes, Component } from 'react';

function getComponentName(Component) {
  return Component.constructor.name || "Component";
}

function createContexter(contextTypesObject) {
  return function wrapWithContext(Component) {
    return class ContextedComponent extends React.Component {
      static contextTypes = contextTypesObject;
      displayName = `Contexted(${getComponentName(Component)})`;
      render() {
        return <Component {...this.context} {...this.props} />;
      }
    }
  };
}

function contexter(contextTypesObject, Component) {
  return createContexter(contextTypesObject)(Component);
}

