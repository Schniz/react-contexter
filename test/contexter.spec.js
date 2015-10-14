require('chai').should();

import contexter from '../';
import React from 'react';

function BlankDiv() {
  return <div />;
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
  });
});

