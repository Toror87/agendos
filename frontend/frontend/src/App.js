import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";

import Home from "./components/home/home.js";
import Perfil from "./components/profile/profile.js";
import Edit from "./components/edit/edit.js";
import Delete from "./components/delete/delete.js";
import Login from "./components/login/login.js";
import AuthRoute from "./components/AuthRoute.js";

function App() {
  return (
	<Router>
	<div>
	  <Switch>
          <Route exact={true} path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
		      <Route path="/perfil">
            <Perfil />
          </Route>
		      <Route path="/edit">
            <Edit />
          </Route>
		      <Route path="/delete">
            <Delete />
          </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;