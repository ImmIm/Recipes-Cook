
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
import recipe1 from '../src/components/Recipes/img/recipe1.jpg';
import recipe2 from '../src/components/Recipes/img/recipe2.jpg';

export const AppContext = React.createContext([]);

function App() {
  const backdrop = useSelector((store) => store.backdrop);
  const logins = useSelector(store => store.loginmodal);
  const sighups = useSelector(store => store.sighupmodal);
  const dispatch = useDispatch();
  const [currentProducts, setCurrentProducts] = React.useState([])

  React.useEffect(() => {
    dispatch({ type: 'INIT' });
    dispatch({ type: 'changeThemeBright' });
  }, []);

  const products = [
    { title: 'pork', type: 'meat', value: false },
    { title: 'beef', type: 'meat', value: false },
    { title: 'lumb', type: 'meat', value: false },
    { title: 'apple', type: 'fruits', value: false },
    { title: 'orange', type: 'fruits', value: false },
    { title: 'potatoes', type: 'vegetables', value: false },
    { title: 'garlic', type: 'vegetables', value: false },
  ];

    const recipes = [
        {title: 'Apple with Garlic', img: <img src={recipe1} alt={"Recipe 1"}/>, description: 'Apple with garlic', ingredient: ['garlic', 'apple', 'orange']},
        {title: 'Lumb with orange', img: <img src={recipe2} alt={"Recipe 2"}/>, description: 'Lumb with orange', ingredient: ['lumb', 'apple', 'orange']},
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
          onClick={() => dispatch({ type: 'backdropOff' })}
        />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(<>{logins? <Login /> : null}</>, document.getElementById('modal-root'))}
      {ReactDOM.createPortal(<>{sighups? <Signup /> : null}</>, document.getElementById('modal-root'))}
    </div>
    </AppContext.Provider>
  );
}

export default App;
