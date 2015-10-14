require('chai').should();

import contexter from '../';
import React, { PropTypes } from 'react';
import { render, getBaseElement } from './001-setup-dom';
import ComponentWithContext from './component-with-context';

function BlankDiv() {
  return <div />;
}

function DivWithString({ someString, dontForget }) {
  return <div>{ someString }{ dontForget }</div>;
}

describe("Contexter", () => {
  it("should expose the base API functions", () => {
    contexter.should.be.a('function');
    contexter.contexter.should.equal(contexter);
    contexter.createContexter.should.be.a('function');
  });

  describe("contexter", () => {
    it('should return a React component', () => {
      var X = contexter({}, BlankDiv);
      React.isValidElement(<X />).should.be.true;
    });

    it('should give the context as props', (done) => {
      var Contexted = contexter({ someString: PropTypes.string }, DivWithString);
      var tree = (
        <ComponentWithContext>
          <Contexted dontForget="Pokemon" />
        </ComponentWithContext>
      );
      render(tree, (a) => {
        getBaseElement().innerHTML.should.match(/Hello/).and.match(/Pokemon/);
        done();
      });
    });
  });
});

