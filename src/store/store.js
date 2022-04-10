import { createStore } from 'redux';

const defaultState = {
  lang: 'EN',
  theme: 'dark',
  isLogined: false,
  backdrop: false,
  loginmodal: false,
  sighupmodal: false,
  users: [
    { email: 1, pass: '123', name: '' },
    { email: 2, pass: '456', name: '' },
  ],
  currentUser: '',
};

const appReducer = (state = {}, action = 'INIT') => {
  switch (action.type) {
    case 'INIT':
      return defaultState;
    case 'changeThemeDark':
      return { ...state, theme: 'dark' };
    case 'changeThemeBright':
      return { ...state, theme: 'bright' };
    case 'backdropOn':
      return { ...state, backdrop: true };
    case 'backdropOff':
      return { ...state, backdrop: false, loginmodal: false };
    case 'logins':
      return { ...state, loginmodal: true };
    case 'signupHandle':
      return {
        ...state,
        users: [
          ...state.users,
          { email: action.email, pass: action.pass, name: action.name },
        ],
      };
    case 'loginHandle':
      if (
        state.users.find((el) => {
          if (el.email === action.login) {
            return true;
          }
          return false;
        })
      ) {
        console.log(state.currentUser);
        return { ...state, currentUser: action.login };
      }
      console.log('error');
      break;
    default:
      return state;
  }
  console.log(state.currentUser);
  return state;
};

const store = createStore(appReducer);

export default store;
