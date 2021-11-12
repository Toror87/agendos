import './login.css';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <form className="containerr">
        <div className="card">
            <div className="top row background-top-row">
                
            </div>
            <div className="content">
                <i className="fa fa-lock" aria-hidden="true"></i>
                <h1>Agendos</h1>
                <p>User</p>
                <input type="text" name="" id="" className="text"/>
                <p>Password</p>
                <input type="password" name="" id="" className="text"/>
                <Link to={'/home'}>
                <button className="buttonn">Ingresar</button>
                </Link>
                <Link to={'/register'}>
                <button className="buttonn">Registrarse</button>
                </Link>
            </div>
        </div>
    </form>  
  )
}

export default Login;