import thunk from 'redux-thunk';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const preloadedState = {
  ui: {
    lang: 'EN',
    theme: 'bright',
    backdrop: false,
    loginmodal: false,
    signupmodal: false,
    recipemodal: false
  },
  auth: {
    currentUser: '',
    isLogined: false,
    users: [
      { email: 1, pass: '123', name: '' },
      { email: 2, pass: '456', name: '' },
    ],
  },
  recipes: {
    chosenIngredients: '',
    recipes: [],
    filteredRecipes: [],
    randomRecipes: [],
    oneRecipe: {},
    loadingImgs: false,
    diets: [
      {
        name: 'Gluten Free',
        description:
          'Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).',
        set: false,
      },
      {
        name: 'Ketogenic',
        description:
          'The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates.',
        set: false,
      },
      {
        name: 'Vegetarian',
        description:
          'No ingredients may contain meat or meat by-products, such as bones or gelatin.',
        set: false,
      },
      {
        name: 'Vegan',
        description:
          'No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.',
        set: false,
      },
      {
        name: 'Paleo',
        description:
          'Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.',
        set: false,
      },
    ],
    cuisines: [
      { name: 'African', set: false },
      { name: 'American', set: false },
      { name: 'British', set: false },
      { name: 'Cajun', set: false },
      { name: 'Caribbean', set: false },
      { name: 'Chinese', set: false },
      { name: 'Eastern European', set: false },
      { name: 'European', set: false },
      { name: 'French', set: false },
      { name: 'German', set: false },
      { name: 'Greek', set: false },
      { name: 'Indian', set: false },
      { name: 'Irish', set: false },
      { name: 'Italian', set: false },
      { name: 'Japanese', set: false },
      { name: 'Jewish', set: false },
      { name: 'Korean', set: false },
      { name: 'Latin American', set: false },
      { name: 'Mediterranean', set: false },
      { name: 'Mexican', set: false },
      { name: 'Middle Eastern', set: false },
      { name: 'Nordic', set: false },
      { name: 'Southern', set: false },
      { name: 'Spanish', set: false },
      { name: 'Thai', set: false },
      { name: 'Vietnamese', set: false },
    ],
    mealType: [
      { name: 'main course', set: false },
      { name: 'side dish', set: false },
      { name: 'dessert', set: false },
      { name: 'appetizer', set: false },
      { name: 'salad', set: false },
      { name: 'bread', set: false },
      { name: 'breakfast', set: false },
      { name: 'soup', set: false },
      { name: 'beverage', set: false },
      { name: 'sauce', set: false },
      { name: 'marinade', set: false },
      { name: 'fingerfood', set: false },
      { name: 'snack', set: false },
      { name: 'drink', set: false },
    ],
  },
 
};



const uiSlice = createSlice({
  name: 'ui',
  initialState: preloadedState.ui,
  reducers: {
    toggleTheme(state) {
      if (state.theme === 'dark') {
        state.theme = 'bright';
        document.body.style.backgroundColor = '#E7DBC6';
        return state;
      }
      document.body.style.backgroundColor = '#31708E';
      state.theme = 'dark';
      return state;
    },
    changeLang(state) {
      if (state.lang === 'en') {
        state.theme = 'he';
        return state;
      }
      state.theme = 'en';
      return state;
    },
    setLoginStatus(state) {
      state.signupmodal = false;
      state.loginmodal = true;
      state.backdrop = true;
      return state;
    },
    setSignUpStatus(state) {
      state.loginmodal = false;
      state.signupmodal = true;
      state.backdrop = true;
      return state;
    },
    setLoginSignUpOff(state) {
      state.loginmodal = false;
      state.signupmodal = false;
      state.recipemodal = false;
      state.backdrop = false;
      return state;
    },
    toggleBackdrop(state) {
      console.log('action');
      if (state.backdrop) {
        state.backdrop = false;
        state.loginmodal = false;
        state.signupmodal = false;
        state.recipemodal = false
        return state;
      }
      state.backdrop = true;
      return state;
    },
    setRecipeModal(state){
      state.loginmodal = false;
      state.signupmodal = false;
      state.recipemodal = true;
      state.backdrop = true;
      return state;
    }
  },
});

const authSlice = createSlice({
  name: 'auth',
  initialState: preloadedState.auth,
  reducers: {
    signup(state, action) {
      state.users.push({
        email: action.payload.email,
        pass: action.payload.pass,
        name: action.payload.name,
      });
      return state;
    },
    login(state, action) {
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
        localStorage.setItem('LOGGED_USER', action.payload.login);
        state.currentUser = {
          login: action.payload.login,
          name: action.payload.name,
        };
        return state;
      }
    },
    logout(state) {
      state.currentUser = '';
      state.isLogined = false;
      localStorage.removeItem('LOGGED_USER');
      return state;
    },
  },
});

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: preloadedState.recipes,
  reducers: {
    setInredients(state, action) {
      state.chosenIngredients = action.payload.ingredient.toString();
      return state;
    },
    setRecipes(state, action) {
      state.recipes = action.payload.data;
      return state;
    },
    setFilteredRecipes(state, action) {
      state.filteredRecipes = action.payload.data;
      return state;
    },
    setRandomedRecipes(state, action){
      console.log(action.payload.data['recipes']);
      state.randomRecipes = action.payload.data['recipes'];
      return state;
    },
    setLoading(state, action) {
      state.loadingImgs = true;
      console.log(state.loadingImgs);
      return state;
    },
    setLoaded(state) {
      state.loadingImgs = false;
      return state;
    },
    setSelectedDiet(state, action) {
      state.diets[{ name: action.payload.name }].set =
        !state.diets[{ name: action.payload.name }].set;
      console.log(state.diets[{ name: action.payload.name }]);
      return state;
    },
    setOneRecipe(state, action){
      state.oneRecipe = action.payload.recipe;
      console.log('setted one recipe');
      console.log(state.oneRecipe);
      return state;
    }
  },
});

const store = configureStore({
  preloadedState,
  reducer: {
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
    recipes: recipesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;

export const authActions = authSlice.actions;
export const uiActions = uiSlice.actions;
export const recipesActions = recipesSlice.actions;

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
