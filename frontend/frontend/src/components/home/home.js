import './home.css';
import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";
import {httpGet} from "../../utils/httpFunctions";




const Home =() => {

	const [,setContacts] = useState([])

	const fetchContacts = () => {
		httpGet('api/contacts/')
		  .then((res) => setContacts(res.data))
	  }
	
	useEffect(fetchContacts, [])
	

	const subjects = [
		{fullname : 'Emilia Mernes', relationship: 'Amigo/a'},
		{fullname : 'FWEAFWEf', relationship: 'Padre'},
		{fullname : 'MFEWCWEfv', relationship: 'Madre'}
	]

	


    return(
        <div>
			<div className="containers">
			    {/*--  BUSCADOR --*/}
			  	<header className="header">
					  <form className="buscador">
						  <input type="nombre-busqueda" className="buscador-contactos" name="area-busqueda" placeholder="Buscar.." />
					  </form>
					  {/*--  BOTON AGREGAR CONTACTO --*/}
				  	  <Link to={'new_contact'}><i className="fas fa-plus-circle add"></i></Link>
				</header>


				{/*--  LISTA DE CONTACTOS --*/}
				<section className="guia-contactos">
					{
						subjects.map((subjects) => {
							return(
								<ul className="lista-contactos">
								<Link to={'/perfil'}>
						  			<div className="contactos">
							  	  		<li className="tarjeta">
												<p className="nombre">{subjects.fullname}</p>
												<p className="relacion">{subjects.relationship}</p>
								  		</li>

								  		<li className="tarjeta">
												<i className="fas fa-phone"></i>
												<i className="fas fa-sms text"></i>
								  		</li>
						  			</div>
								</Link>
								<hr/>
							</ul>
							)
						})
					}
					
				</section>
			</div>
		</div>
    )
}

export default Home;