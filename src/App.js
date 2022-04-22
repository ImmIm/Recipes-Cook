
import './App.css';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import React from 'react';
// import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
// import Login from './components/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/Login/Login';
import { Backdrop } from '@mui/material';
import { Footer } from './components/Footer/Footer';
import Signup from './components/Registration/Signup';
import { Search } from '@mui/icons-material';
import ListOfProducts from './components/Products/ListOfProducts'
import Products from './components/Products/Products';
import { uiActions } from './store/store';
import Recipes from './components/Recipes/Recipes';

export const AppContext = React.createContext([]);

function App() {
  const backdrop = useSelector((store) => store.ui.backdrop);
  const logins = useSelector(store => store.ui.loginmodal);
  const signups = useSelector(store => store.ui.signupmodal);
  const dispatch = useDispatch();
  const [currentProducts, setCurrentProducts] = React.useState([]);


  const products = [
    { title: 'pork', type: 'meat', value: false },
    { title: 'beef', type: 'meat', value: false },
    { title: 'lumb', type: 'meat', value: false },
    { title: 'apple', type: 'fruits', value: false },
    { title: 'orange', type: 'fruits', value: false },
    { title: 'potatoes', type: 'vegetables', value: false },
    { title: 'ham', type: 'meat', value: false },
    { title: 'cucumber', type: 'vegetables', value: false },
    { title: 'tomato', type: 'vegetables', value: false },
    { title: 'cabbage', type: 'vegetables', value: false },
    { title: 'carrot', type: 'vegetables', value: false },
    { title: 'pumpkin', type: 'vegetables', value: false },
    { title: 'onion', type: 'vegetables', value: false },
    { title: 'pepper', type: 'vegetables', value: false },
    { title: 'pear', type: 'fruits', value: false },
    { title: 'banana', type: 'fruits', value: false },
    { title: 'grapes', type: 'fruits', value: false },
    { title: 'watermelon', type: 'fruits', value: false },
    { title: 'strawberries', type: 'fruits', value: false },
    { title: 'pineapple', type: 'fruits', value: false },
    { title: 'mango', type: 'fruits', value: false },
    { title: 'spaghetti', type: 'pasta', value: false},
    { title: 'noodles', type: 'pasta', value: false},
    { title: 'lasagne', type: 'pasta', value: false},
    { title: 'vermicelli', type: 'pasta', value: false},
    { title: 'macaroni', type: 'pasta', value: false},
    { title: 'ravioli', type: 'pasta', value: false},
    { title: 'fettuccini', type: 'pasta', value: false},
    { title: 'rice', type: 'groats', value: false},
    { title: 'buckwheat', type: 'groats', value: false},
    { title: 'bulgur', type: 'groats', value: false},
    { title: 'couscous', type: 'groats', value: false},
    { title: 'millet', type: 'groats', value: false},
    { title: 'corn', type: 'groats', value: false},
    { title: 'salmon', type: 'fish', value: false},
    { title: 'eel', type: 'fish', value: false},
    { title: 'carp', type: 'fish', value: false},
    { title: 'tuna', type: 'fish', value: false},
    { title: 'hake', type: 'fish', value: false},
    { title: 'herring', type: 'fish', value: false},
    { title: 'mackerel', type: 'fish', value: false},
    { title: 'pollock', type: 'fish', value: false},
  ];

    const recipes = [
        {title: 'Apple with Garlic', img: <img src={''} alt={"Recipe 1"}/>, description: 'Apple with garlic', ingredient: ['garlic', 'apple', 'orange']},
        {title: 'Lumb with orange', img: <img src={''} alt={"Recipe 2"}/>, description: 'Lumb with orange', ingredient: ['lumb', 'apple', 'orange']},
    ];

  return (
    <AppContext.Provider value={{
      products: products,
      recipes: recipes,
      currentProducts: currentProducts,
      setCurrentProducts: setCurrentProducts

  }}>
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/Recipes-Cook' element={<Homepage />} />
        <Route path='/Recipes-Cook/Signup' element={<Signup />} />
        <Route path='/Recipes-Cook/Products' element={<Products />} />
        <Route path='/Recipes-Cook/Recipes' element={<Recipes/>} />

      </Routes>
      {ReactDOM.createPortal(
        <Backdrop
          open={backdrop || false}
          sx={{
            zIndex: '100',
            opacity: '0.4',
            backdropFilter: 'blur(2px)',
            transitionDuration: '0.5s',
          }}
          invisible={false}
          onClick={() => dispatch(uiActions.toggleBackdrop())}
        />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(<>{logins? <Login /> : null}</>, document.getElementById('modal-root'))}
      {ReactDOM.createPortal(<>{signups? <Signup /> : null}</>, document.getElementById('modal-root'))}
    </div>
    </AppContext.Provider>
  );
}

export default App;
