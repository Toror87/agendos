import './home.css';
import {Link} from 'react-router-dom';

const Home =() => {

    return(
        <div>
			<div className="containers">
			    {/*--  BUSCADOR --*/}
			  	<header className="header">
					  <form className="buscador">
						  <input type="nombre-busqueda" className="buscador-contactos" name="area-busqueda" placeholder="Buscar.." />
					  </form>
					  {/*--  BOTON AGREGAR CONTACTO --*/}
				  	  <Link to={'edit'}><i className="fas fa-plus-circle add"></i></Link>
				</header>


				{/*--  LISTA DE CONTACTOS --*/}
				<section className="guia-contactos">
					<ul className="lista-contactos">
						<Link to={'/perfil'}>
						  	<div className="contactos">
							  	  <li className="tarjeta">
										<p className="nombre">Emilia Mernes</p>
										<p className="relacion">Amigo/a</p>
								  </li>

								  <li className="tarjeta">
										<i className="fas fa-phone"></i>
										<i className="fas fa-sms text"></i>
								  </li>
						  	</div>
						</Link>
						<hr/>
						<Link to={'/perfil'}>
						  	<div className="contactos">
							  	  <li className="tarjeta">
										<p className="nombre">Nicki Nicole</p>
										<p className="relacion">Amigo/a</p>
								  </li>

								  <li className="tarjeta">
										<i className="fas fa-phone"></i>
										<i className="fas fa-sms text"></i>
								  </li>
						  	</div>
						</Link>
						<hr/>
						<Link to={'/perfil'}>
						  	<div className="contactos">
							  	  <li className="tarjeta">
										<p className="nombre">Cazzu</p>
										<p className="relacion">Amigo/a</p>
								  </li>

								  <li className="tarjeta">
										<i className="fas fa-phone"></i>
										<i className="fas fa-sms text"></i>
								  </li>
						  	</div>
						</Link>
						<hr/>
						<Link to={'/perfil'}>
						  	<div className="contactos">
							  	  <li className="tarjeta">
										<p className="nombre">María Becerra</p>
										<p className="relacion">Amigo/a</p>
								  </li>

								  <li className="tarjeta">
										<i className="fas fa-phone"></i>
										<i className="fas fa-sms text"></i>
								  </li>
						  	</div>
						</Link>
						<hr/>
						<Link to={'/perfil'}>
						  	<div className="contactos">
							  	  <li className="tarjeta">
										<p className="nombre">Tini Stoessel</p>
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
				</section>
			</div>
		</div>
    )
}

export default Home;