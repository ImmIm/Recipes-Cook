import {createStore} from 'redux';
import initialization from './actions';

const defaultState = { lang: 'EN', theme: 'dark' };

const appReducer = (state = {}, action = 'INIT') => {
    switch (action.type) {
      case 'INIT':
        return defaultState;
        case  'changeThemeDark':
        return {...state, theme: 'dark'}
        case  'changeThemeBright':
            return {...state, theme: 'bright'}
      default:
        break;
    }
    return state;
  };



const store = createStore(appReducer);


export default store;




