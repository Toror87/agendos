import './new_contact.css';
import {Link} from 'react-router-dom';

const new_contact =() => {

	

    return (
        <div className="containeer">
			<header className="heroo">
			
			<Link to={'/home'}>
			     <i className="fas fa-chevron-circle-left back-btn"></i>
			</Link>

			<div className="heroo-info">
				<h1 className="name">Nuevo Contacto</h1>
				<p className="relationship-heroo"></p>
			</div>
		</header>

		<section className="contactt-info">

			<div className="info-line">
				<i className="fas fa-user-circle icon-gradient"></i>
				<input type="text" className="type" name="fullname" placeholder="Nombre completo"
				  />
			</div>

			
			<div className="info-line">
				<i className="fas fa-phone icon-gradient"></i>
				<input type="text" className="type" name="phone-number" placeholder="Numero de telefono"/>
			</div>

			<div  className="info-line">
				<i className="fas fa-envelope icon-gradient"></i>
				<input type="text" className="type" name="e-mail" placeholder="Email"
				 />
			</div>

			<div className="info-line">
				<i className="fas fa-map-marker-alt icon-gradient location"></i>
				<input type="text" className="type" name="address" placeholder="Direccion"
				/>
			</div>
			
		</section>

		<section className="btn-container">
			<div className="update-contact">
				<i  className="fas fa-check-circle icon-gradient"></i>
				<button type="submit" className="button">Guardar Contacto</button>
			</div>
		</section>
		</div>
    )
}

export default new_contact;