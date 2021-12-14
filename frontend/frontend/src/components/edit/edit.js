import './edit.css';
import {Link} from 'react-router-dom';
import profile from "../profile/profile";
import {useLocation} from "react-router-dom";
import {httpPut} from "../../utils/httpFunctions";
import {useHistory} from "react-router-dom";
import {useState} from "react";

const Edit =(props) => {
	const location = useLocation()
	let contact_id = location.profileProps.contact_id
	let contact_name = location.profileProps.contact_name
	const [new_name, setName] = useState()
	const [new_phone, setPhone] = useState()
	const [new_address, setAddress] = useState()
	const [new_email, setEmail] = useState()

	const history = useHistory()

	const updateContact = (data) => {
		httpPut(`api/contacts/${contact_id}/`, {id: contact_id, name: new_name, phone: new_phone, address: new_address, email: new_email, user: data.user}).then(history.push('/home'))
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

			<form onSubmit={updateContact}>
		<section className="contact-info">

			<div className="info-line">
				<i className="fas fa-user-circle icon-gradient"></i>
				<input type="text" className="type" name="fullname" onChange={(e) => setName(e.target.value)} placeholder="Nombre completo"/>
			</div>

			<div className="info-line">
				<i className="fas fa-sms icon-gradient "></i>
				<input type="text" className="type" name="relationship" placeholder="Relacion"/>
			</div>

			<div className="info-line">
				<i className="fas fa-phone icon-gradient"></i>
				<input type="text" className="type" name="phone-number" onChange={(e) => setPhone(e.target.value)}placeholder="Numero de telefono"/>
			</div>

			<div  className="info-line">
				<i className="fas fa-envelope icon-gradient"></i>
				<input type="text" className="type" name="e-mail" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
			</div>

			<div className="info-line">
				<i className="fas fa-map-marker-alt icon-gradient location"></i>
				<input type="text" className="type" name="address" onChange={(e) => setAddress(e.target.value)} placeholder="Direccion"/>
			</div>
			
		</section>

		<section className="button-container">
			<div className="update-contact">
				<i  className="fas fa-check-circle icon-gradient"></i>
				<button type="submit" className="button">Guardar Contacto</button>
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
			</form>
		</div>
    )
}

export default Edit;