import './register.css';
import {useState} from "react";
import {httpPost} from "../../utils/httpFunctions";

const Register = () => {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
    

    const registro = (e) => {
      e.preventDefault()
      httpPost('api/register/', { username: username, password: password})
      .then()
    
  }
  
  return (
    <form className="containerr" onSubmit={registro}>
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
                <input type="password" name="password" className="text"
                value={password}
                onChange={(e) => setPassword(e.target.value) }/>
                
                <button type="submit" className="buttonn">Registrarse</button>
                
            </div>
        </div>
    </form>  
  )
}

export default Register;