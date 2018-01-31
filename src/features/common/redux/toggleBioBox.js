import {
  COMMON_TOGGLE_BIO_BOX,
} from './constants';

export function toggleBioBox() {
  return {
    type: COMMON_TOGGLE_BIO_BOX,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case COMMON_TOGGLE_BIO_BOX:
      return {
        ...state,
        bioBoxOpen: !state.bioBoxOpen
      };

    default:
      return state;
  }
}
