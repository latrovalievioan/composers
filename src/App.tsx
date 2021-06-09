import React from 'react';
import './App.css';
import {
  essentials,
  popular,
  nameSearch,
  loadFavoritesFromStorage,
} from './redux/actions';
import { useAppDispatch } from './hooks';
import { ComposersGrid } from './components/ComposersGrid';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { EssentialComposers } from './components/EssentialComposers';
import { PopularComposers } from './components/PopularComposers';
import { FavoriteComposers } from './components/FavoriteComposers';
function App() {
  const dispatch = useAppDispatch();
  const searchBar = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    dispatch(essentials());
    dispatch(popular());
    dispatch(loadFavoritesFromStorage());
  }, []);

  return (
    <Router>
      <div className="App">
        <h1 className="page-title">Classical Composers</h1>
        <input
          ref={searchBar}
          onInput={() => {
            if (searchBar.current)
              dispatch(nameSearch(searchBar.current.value));
          }}
          type="text"
          placeholder="Find a Composer"
          className="search-bar"
        />
        <nav className="navigation">
          <li className="nav-button">
            <Link to="/essentials">Essential Composers</Link>
          </li>
          <li className="nav-button">
            <Link to="/popular">Popular Composers</Link>
          </li>
          <li className="nav-button">
            <Link to="/favorites">Favorite Composers</Link>
          </li>
        </nav>
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
