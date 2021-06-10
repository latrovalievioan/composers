import React from 'react';
import './App.css';
import { initApp } from './redux/actions';
import { useAppDispatch } from './hooks';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { EssentialComposers } from './components/EssentialComposers';
import { PopularComposers } from './components/PopularComposers';
import { FavoriteComposers } from './components/FavoriteComposers';
import { Nav } from './components/Nav';

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(initApp());
  }, []);
  return (
    <Router>
      <div className="App">
        <h1 className="page-title">Classical Composers</h1>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Redirect to="/popular" />
          </Route>
          <Route path="/essentials">
            <EssentialComposers />
          </Route>
          <Route path="/popular">
            <PopularComposers />
          </Route>
          <Route path="/favorites">
            <FavoriteComposers />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
