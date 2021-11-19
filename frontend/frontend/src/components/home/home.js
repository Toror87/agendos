import './home.css';
import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";
import {httpGet} from "../../utils/httpFunctions";




const Home =() => {

	const [contacts,setContacts] = useState([])

	const fetchContacts = () => {
		httpGet('api/contacts/')
		  .then((res) => setContacts(res.data))
	  }
	
	useEffect(fetchContacts, [])
	


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
						contacts.map((contact) => {
							return(
								<ul className="lista-contactos">
								<Link to={'/perfil'}>
						  			<div className="contactos">
							  	  		<li className="tarjeta">
												<p className="nombre">{contact.name}</p>
												<p className="relacion">Amigo/a</p>
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