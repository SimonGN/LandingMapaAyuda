import * as authTypes from '../types/auth';
import AuthService from '../../services/auth.service';
import Router from 'next/router';

const authService = new AuthService();

export const login = payload => {
	return async dispatch => {
		dispatch(setFetching(true));
		dispatch(authFail(''));
		try {
			const response = await authService.login(payload);
			dispatch({ type: authTypes.LOGIN, payload: response });
			dispatch(setFetching(false));
			Router.push('/');
		} catch (e) {
			dispatch(authFail(e.response.data.message));
			dispatch(setFetching(false));
		}
	};
};

export const register = payload => {
	return async dispatch => {
		dispatch(setFetching(true));
		dispatch(authFail(''));
		try {
			const response = await authService.register(payload);
			dispatch({ type: authTypes.REGISTER, payload: response });
			dispatch(setFetching(false));
			Router.push({
				pathname: '/profile',
				query: { edit: true },
			});
		} catch (e) {
			dispatch(authFail(e.response.data.message));
			dispatch(setFetching(false));
		}
	};
};

const authFail = payload => {
	return {
		type: authTypes.FAIL,
		payload,
	};
};

export const setFetching = payload => {
	return {
		type: authTypes.IS_FETCHING,
		payload,
	};
};
