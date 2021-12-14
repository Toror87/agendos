import './edit.css';
import {Link} from 'react-router-dom';
import profile from "../profile/profile";
import {useLocation} from "react-router-dom";
import {httpPut} from "../../utils/httpFunctions";
import {useHistory} from "react-router-dom";

const Edit =(props) => {
	const location = useLocation()
	let contact_id = location.profileProps.contact_id
	let contact_name = location.profileProps.contact_name

	const history = useHistory()

	const updateContact = () => {
		httpPut(`api/contacts/${contact_id}`, ).then(history.push('/home'))
	}

    return (
        <div className="containerrrr">
			<header className="hero">
			
			<Link to={'/perfil'}>
			     <i className="fas fa-chevron-circle-left back-btn"></i>
			</Link>

			<div className="hero-info">
				<h1 className="name">{contact_name}</h1>
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
				<form onSubmit={updateContact}>
				<button type="submit" className="button">Guardar Contacto</button>
				</form>
			</div>
		</section>

		<section className="button-container">
			<Link to={{pathname: '/delete',
						profileProps: {
							contact_id: contact_id,
							contact_name: contact_name
						}
								}}>
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