import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import React from 'react';
import ctx from './context/mainContext';

function App() {
  const context = React.useContext(ctx);
  const [lang, setLang] = React.useState(context.lang);
  const [theme, setTheme] = React.useState(context.theme);
  
  const langHandler = () =>{
    setLang((prev) => {
      if (prev === 'EN'){
        context.lang = 'HE'
      }else{
        context.lang = 'EN'
      }
    })
  }

  const themeHandler = () =>{
    setTheme((prev) => {
      if (prev === 'light'){
        return 'dark';
      }else{
        return 'light';
      }
    })

  }
  return (
    <div className='App'>
      <Header langHandler={langHandler} themeHandler={themeHandler}/>
      <Homepage/>
    </div>
  );
}

export default App;
