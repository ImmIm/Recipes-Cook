import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import React from 'react';
import ctx from './context/mainContext';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Registration/Signup';

function App() {
  const context = React.useContext(ctx);
  const [lang, setLang] = React.useState(context.lang);
  const [theme, setTheme] = React.useState(context.theme);

  const langHandler = () => {
    setLang((prev) => {
      if (prev === 'EN') {
        context.lang = 'HE';
      } else {
        context.lang = 'EN';
      }
    });
  };

  const themeHandler = () => {
    setTheme((prev) => {
      if (prev === 'light') {
        return 'dark';
      } else {
        return 'light';
      }
    });
  };
  return (
    <div className='App'>
      <Header langHandler={langHandler} themeHandler={themeHandler} />
      <Routes>
        <Route path='/Recipes-Cook' element={<Homepage />} />
        <Route path='/Recipes-Cook/login' element={<Login />} />
        <Route path='/Recipes-Cook/signup' element={<Signup />} />
        {/* <Route path='/Recipes-Cook/products' element={} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
