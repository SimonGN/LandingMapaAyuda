import * as authTypes from '../types/auth'
import AuthServide from '../../services/auth.service'

const authService = new AuthServide();

export const login = (payload) => {
  return async (dispatch) => {
    dispatch(setFetching(true))
    dispatch(loginFail(""))
    try {
      const response = await authService.login(payload);
      dispatch({ type: authTypes.LOGIN, payload: response })
      dispatch(setFetching(false))
    } catch (e) {
      dispatch(loginFail(e.response.data.message))
      dispatch(setFetching(false))
    }
  }
}

const loginFail = (payload) => {
  return {
      type: authTypes.FAIL,
      payload
  }
}

const setFetching = payload => {
  return {
    type: authTypes.IS_FETCHING,
    payload
  } 
}