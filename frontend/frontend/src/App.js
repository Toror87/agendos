import {
    // Router sirve para navegar de una view a la otra sin abandonar la página actual
	BrowserRouter as Router,
    /* Switch debe envolver todos los tags del componente para poder manejar errores de página
    como un 404 Page Not Found */
	Switch,
    //
	Route,
  } from "react-router-dom";

import Home from "./components/home/home";
import Perfil from "./components/profile/profile";
import Edit from "./components/edit/edit";
import Delete from "./components/delete/delete";
import New from "./components/new_contact/new_contact";
import Login from "./components/login/login.js";
import Register from "./components/register/register";

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
          <Route path="/new_contact">
            <New />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
      </Switch>
      </div>
    </Router>
  );
}

// necesitamos exportar App para poder visualizarla en los demás archivos del proyecto
export default App;