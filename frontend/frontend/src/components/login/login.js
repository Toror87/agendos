import './login.css';
import {Link} from 'react-router-dom';
import {useState} from "react";
import {httpPost} from "../../utils/httpFunctions";
import {useHistory} from 'react-router-dom'

const Login = () => {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const history = useHistory ();
    
    const login = (e) => {
      e.preventDefault()
      httpPost('api/login/', { username: username, password: password}).then((res) => {
        localStorage.setItem('token', res.data.access)
        history.push('/home')
       } )
  }

  return (
    <form className="containerr" onSubmit={login}>
        <div className="card">
          
            <div className="top row background-top-row">
            </div>
            <div className="content">
                <i className="fa fa-lock" aria-hidden="true"></i>
                <h1>Agendos</h1>
                <p>User</p>
                <input type="text" name="username" className="text"
                value={username}
                onChange={(e) => setUsername(e.target.value) }/>
                <p>Password</p>
                <input type="password" name="password"  className="text"
                value={password}
                onChange={(e) => setPassword(e.target.value) }/>
                
                <button type="submit" className="buttonn">Ingresar</button>
                
                <Link to="/register">
                <button className="buttonn">Registrarse</button>
                </Link>
            </div>
        </div>
    </form>  
  )
}

export default Login;