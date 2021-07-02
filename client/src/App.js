import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import Movies from './components/Movies';
import Admin from './components/Admin';
import Home from './components/Home';
import Categories from './components/Categories';

export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">Go Watch a Movie!</h1>
          <hr className="mb=3"></hr>
        </div>

        <div className="row">
          <div className="col-md-2">
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/movies">Movies</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/by-category">Category</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin">Manage Catalog</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-md-10">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/movies/:id" component={Movie} />
              <Route exact path="/movies" component={Movies} />
              <Route exact path="/by-category" component={Category} />
              <Route
                exact
                path="/by-category/drama"
                render={(props) => <Categories {...props} title={`Drama`} />}
              />
              <Route
                exact
                path="/by-category/comedy"
                render={(props) => <Categories {...props} title={`Comedy`} />}
              />
              <Route exact path="/admin" component={Admin} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Movie() {
  let { id } = useParams();
  return <h2>Movie id {id}</h2>;
}

function Category() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        <li>
          <Link to={`${path}/drama`}>Drama</Link>
        </li>
        <li>
          <Link to={`${path}/comedy`}>Comedy</Link>
        </li>
      </ul>
    </div>
  );
}
