import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { BioPopUp } from 'src/features/home/BioPopUp';

describe('home/BioPopUp', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <BioPopUp {...props} />
    );

    expect(
      renderedComponent.find('.home-bio-pop-up').node
    ).to.exist;
  });
});
