
import thunk from 'redux-thunk';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const preloadedState = {
  ui: {
    lang: 'EN',
    theme: 'dark',
    backdrop: false,
    loginmodal: false,
    signupmodal: false,
  },
  auth: {
    currentUser: '',
    isLogined: false,
    users: [
      { email: 1, pass: '123', name: '' },
      { email: 2, pass: '456', name: '' },
    ]
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: preloadedState.ui,
  reducers: {
    toggleTheme(state) {
      console.log('done');
      if (state.theme === 'dark') {
        state.theme = 'bright';
        return;
      }
      state.theme = 'dark';
    },
    changeLang(state) {
      if (state.lang === 'en') {
        state.theme = 'he';
        return;
      }
      state.theme = 'en';
    },
    setLoginStatus(state) {
      console.log('done');
      state.loginmodal = true;
    },
    setSignUpStatus(state) {
      console.log('done');
      state.signupmodal = true;
    },
    toggleBackdrop(state) {
      console.log('done');
      if (state.backdrop){
        state.backdrop = false;
        state.loginmodal = false;
        state.signupmodal = false;
        return;
      }
      state.backdrop = true;
    },
  },
});

const authSlice = createSlice({
  name: 'auth',
  initialState: preloadedState.auth,
  reducers: {
    signup(state, action) {
      state.users.push({ email: action.payload.email, pass: action.payload.pass, name: action.payload.name });
    },
    login (state, action){
      if (
        state.users.find((el) => {
          if (el.email == action.payload.login) {
            if (el.pass == action.payload.pass) {
              return true;
            }
          }
          return false;
        })
      ) {
        localStorage.setItem('LOGGED_USER', action.login);
        state.currentUser = {login: action.payload.login, name: action.payload.name}
      }
    },
  }
})


const store = configureStore({
  preloadedState,
  reducer: { ui: uiSlice.reducer, auth: authSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;

export const authActions = authSlice.actions;

export const uiActions = uiSlice.actions;





// export const getData = () => async (dispatch) => {
//   fetch('http://www.themealdb.com/api/json/v1/1/random.php')
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       dispatch({ type: 'test', test: data });
//       console.log(data);
//     });
// };
