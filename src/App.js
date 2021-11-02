import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter, Route } from "react-router-dom"
import Todo from './Components/Todo/Todo';
import News from './Components/News/News';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <div>
          <Route path="/Todo" component={Todo} />
          <Route path="/News" component={News} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


