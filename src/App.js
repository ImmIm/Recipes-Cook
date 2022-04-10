
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

function App() {
  const backdrop = useSelector((store) => store.backdrop);
  const logins = useSelector(store => store.loginmodal);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: 'INIT' });
    dispatch({ type: 'changeThemeBright' });
  }, []);

  return (
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
    </div>
  );
}

export default App;
