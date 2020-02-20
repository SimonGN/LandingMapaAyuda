import * as generalTypes from '../types/general'

const initialState = {
  navHeight: 0
};

const general = (state = initialState, action) => {
  switch (action.type) {
    case generalTypes.NAV_HEIGHT: {
      return {
        ...state,
        navHeight: action.payload
      };
    }
    default:
      return state;
  }
};

export default general