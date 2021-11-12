import './edit.css';
import {Link} from 'react-router-dom';

const Edit =() => {
    return (
        <div className="containerrrr">
			<header className="hero">
			
			<Link to={'/perfil'}>
			     <i className="fas fa-chevron-circle-left back-btn"></i>
			</Link>

			<div className="hero-info">
				<h1 className="name">Emilia Mernes</h1>
				<p className="relationship-hero">Amigo/a</p>
			</div>
		</header>

		<section className="contact-info">

			<div className="info-line">
				<i className="fas fa-user-circle icon-gradient"></i>
				<input type="text" className="type" name="fullname" placeholder="Nombre completo"/>
			</div>

			<div className="info-line">
				<i className="fas fa-sms icon-gradient "></i>
				<input type="text" className="type" name="relationship" placeholder="Relacion"/>
			</div>

			<div className="info-line">
				<i className="fas fa-phone icon-gradient"></i>
				<input type="text" className="type" name="phone-number" placeholder="Numero de telefono"/>
			</div>

			<div  className="info-line">
				<i className="fas fa-envelope icon-gradient"></i>
				<input type="text" className="type" name="e-mail" placeholder="Email"/>
			</div>

			<div className="info-line">
				<i className="fas fa-map-marker-alt icon-gradient location"></i>
				<input type="text" className="type" name="address" placeholder="Direccion"/>
			</div>
			
		</section>

		<section className="button-container">
			<div className="update-contact">
				<i  className="fas fa-check-circle icon-gradient"></i>
				<button className="button">Guardar Contacto</button>
			</div>
		</section>

		<section className="button-container">
			<Link to={'/delete'}>
				<div className="update-contact">
					<i className="fas fa-trash icon-gradient"></i>
					<button className="button">Eliminar Contacto</button>
				</div>
			</Link>
		</section>
		</div>
    )
}

export default Edit;