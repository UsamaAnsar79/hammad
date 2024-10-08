
import axios from 'axios';

export const loginSuccess = (user, token) => ({
  type: 'LOGIN_SUCCESS',
  payload: { user, token },
});

export const signupSuccess = (user, token) => ({
  type: 'SIGNUP_SUCCESS',
  payload: { user, token },
});

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/auth/login',
      { email, password },
      { withCredentials: true }
    );

    if (response.status === 200) {
      const { id, name } = response.data;
      dispatch(loginSuccess({ id, name }, response.data.token)); // Send token and user data
    }
  } catch (error) {
    console.error('Login failed:', error);
  }
};

export const signup = (name, email, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
    if (response.status === 201) {
      const { id, name } = response.data;
      dispatch(signupSuccess({ id, name }, response.data.token)); // Send token and user data
    }
  } catch (error) {
    console.error('Signup failed:', error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });
    dispatch({ type: 'LOGOUT' });
  } catch (error) {
    console.error('Logout failed:', error);
  }
};
