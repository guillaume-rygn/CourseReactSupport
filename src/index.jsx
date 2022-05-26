import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Counter from './pages/Counter';
import About from './pages/About';
import Notfound from './pages/Notfound';
import Header from './components/Header';
import './style.scss';
import AppContextProvider from './Context';
import { Provider } from 'react-redux';
import store from './stores/user';

const App = () => {
  return(
    <Provider store={store}>
    <AppContextProvider>
      <BrowserRouter>
        <Header/>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/counter/*' element={<Counter/>}/>
            <Route path='/counter/:about' element={<About/>}/>
            <Route path='*' element={<Notfound/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </AppContextProvider>
    </Provider>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));