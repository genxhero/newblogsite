import React from 'react';
import ArticlesIndex from './articles_index';
import Header from './header';
import {Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
      <BrowserRouter >
        <Switch>
          <Route path="/index" component={ArticlesIndex}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
