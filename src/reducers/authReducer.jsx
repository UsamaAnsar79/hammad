// reducers/authReducer.js
const initialState = {
  isAuthenticated: !!localStorage.getItem('token'), // Check for token in local storage
  user: JSON.parse(localStorage.getItem('user')) || null, // Get the user object if it exists
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'SIGNUP_SUCCESS':
      localStorage.setItem('token', action.payload.token); // Save token to local storage
      localStorage.setItem('user', JSON.stringify(action.payload.user)); // Save user to local storage
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case 'LOGOUT':
      localStorage.removeItem('token'); // Remove token from local storage
      localStorage.removeItem('user');  // Remove user from local storage
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;

  

// const initialState = {
//   isAuthenticated: !!localStorage.getItem('token'),
//   user: JSON.parse(localStorage.getItem('user')) || null,
// };

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'LOGIN_SUCCESS':
//     case 'SIGNUP_SUCCESS':
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: action.payload,
//       };
//     case 'LOGOUT':
//       return {
//         ...state,
//         isAuthenticated: false,
//         user: null,
//       };
//     default:
//       return state;
//   }
// };

// export default authReducer;
