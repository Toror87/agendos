import './App.css';

function App() {
  return (
    <div>
			<div className="container">
			    {/*--  BUSCADOR --*/}
			  	<header className="header">
					  <form className="buscador">
						  <input type="nombre-busqueda" className="buscador-contactos" name="area-busqueda" placeholder="Buscar.." />
					  </form>
					  {/*--  BOTON AGREGAR CONTACTO --*/}
				  	  <a href="editar.html"><i className="fas fa-plus-circle add"></i></a>
				</header>


				{/*--  LISTA DE CONTACTOS --*/}
				<section className="guia-contactos">
					<ul className="lista-contactos">
						<a href="perfil-contacto.html">
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
					 	</a>
						<hr/>
						<a href="perfil-contacto.html">
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
					 	</a>
						<hr/>
						<a href="perfil-contacto.html">
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
					 	</a>
						<hr/>
						<a href="perfil-contacto.html">
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
					 	</a>
						<hr/>
						<a href="perfil-contacto.html">
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
					 	</a>
						<hr/>
					</ul>
				</section>
			</div>
		</div>
  );
}

export default App;
