import React from 'react';
import './App.css';
import { nameSearch, initApp } from './redux/actions';
import { useAppDispatch } from './hooks';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { EssentialComposers } from './components/EssentialComposers';
import { PopularComposers } from './components/PopularComposers';
import { FavoriteComposers } from './components/FavoriteComposers';
import { Nav } from './components/Nav';

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(initApp());
  }, []);

  const searchBar = React.useRef<HTMLInputElement>(null);

  return (
    <Router>
      <div className="App">
        <h1 className="page-title">Classical Composers</h1>
        <Nav />
        <Switch>
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
