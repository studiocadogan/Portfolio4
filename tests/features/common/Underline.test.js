import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Underline } from 'src/features/common';

describe('common/Underline', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Underline />
    );

    expect(
      renderedComponent.find('.common-underline').node
    ).to.exist;
  });
});
