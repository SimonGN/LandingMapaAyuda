import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const exampleInitialState = {
  navHeight: 0
};

export const actionTypes = {
  NAV_HEIGHT: 'NAV_HEIGHT'
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.NAV_HEIGHT: {
      return {
        ...state,
        navHeight: action.payload
      };
    }
    default:
      return state;
  }
};

// ACTIONS
export const updateNavHeight = (height) => {
  return { type: actionTypes.NAV_HEIGHT, payload: height };
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
