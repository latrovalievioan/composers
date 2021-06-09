import React from 'react';
import './App.css';
import {
  essentials,
  popular,
  nameSearch,
  loadFavoritesFromStorage,
} from './redux/actions';
import { useAppDispatch } from './hooks';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { EssentialComposers } from './components/EssentialComposers';
import { PopularComposers } from './components/PopularComposers';
import { FavoriteComposers } from './components/FavoriteComposers';
import { Nav } from './components/Nav';

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
        <Nav />
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
