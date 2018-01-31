import { expect } from 'chai';

import {
  COMMON_TOGGLE_BIO_BOX,
} from 'src/features/common/redux/constants';

import {
  toggleBioBox,
  reducer,
} from 'src/features/common/redux/toggleBioBox';

describe('common/redux/toggleBioBox', () => {
  it('returns correct action by toggleBioBox', () => {
    expect(toggleBioBox()).to.have.property('type', COMMON_TOGGLE_BIO_BOX);
  });

  it('handles action type COMMON_TOGGLE_BIO_BOX correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: COMMON_TOGGLE_BIO_BOX }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
