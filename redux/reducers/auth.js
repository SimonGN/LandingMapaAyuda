import * as authTypes from '../types/auth';

const initialState = {
	user: {},
	error: '',
	isFetching: false,
};

const auth = (state = initialState, action = {}) => {
	switch (action.type) {
		case authTypes.IS_FETCHING:
			return {
				...state,
				isFetching: action.payload,
			};
		case authTypes.FAIL:
			return {
				...state,
				error: action.payload,
			};
		case authTypes.LOGIN:
			return {
				...state,
				user: action.payload,
			};
		case authTypes.REGISTER:
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
};

export default auth;
