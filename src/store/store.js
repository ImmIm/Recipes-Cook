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
      return { ...state, backdrop: false, loginmodal: false , sighupmodal: false};
    case 'logins':
      return { ...state, loginmodal: true };
      case 'signups':
        return {...state, loginmodal: false, sighupmodal: true,  }
    case 'signupHandle':
      console.log('hhui');
      const temp = state.users;
      temp.push({email: action.email, pass: action.pass, name: action.name})
      return {
        ...state,
        users: temp
      };
    case 'loginHandle':
      if (
        state.users.find((el) => {
          if (el.email == action.login) {
            if (el.pass == action.pass){
              return true;
            }
          }
          return false;
        })
      ) {
        localStorage.setItem('LOGGED_USER', action.login)
        console.log(state.currentUser);
        return { ...state, currentUser: action.login };
      }
      console.log('error');
      return state;
    default:
      return state;
  }
  console.log(state.currentUser);
  return state;
};

const store = createStore(appReducer);

export default store;
