import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { auth } from "./firebase";

const isAuthenticated = () => auth?.currentUser;

const PrivateRoute = ({ component: Component, ...rest }) => {
  const render = () =>
    isAuthenticated() ? <Component {...rest} /> : <Redirect to="/login" />;

  return <Route {...rest} render={render} />;
};

const PublicRoute = ({ component: Component, ...rest }) => {
  const render = () =>
    isAuthenticated() ? <Redirect to="/" /> : <Component {...rest} />;

  return <Route {...rest} render={render} />;
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute path="/" exact={true} component={Home} />
      <PublicRoute path="/login" component={Login} />
      <PublicRoute path="/register" component={Register} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;