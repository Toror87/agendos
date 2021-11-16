import './new_contact.css';
import {Link} from 'react-router-dom';
import {useState} from "react";
import {httpPost} from "../../utils/httpFunctions";
import {useHistory} from 'react-router-dom'

const New_contact =() => {

	const [name, setName] = useState()
	const [phone, setPhone] = useState()
	const [email, setEmail] = useState()
	const [address, setAddress] = useState()

	const history = useHistory ();
  	

	  const createContact = (e) => {
		e.preventDefault()
		httpPost('api/contacts/', { name: name, phone: phone, email: email, address: address})
		.then(history.push('/home'))
		}

    return (
        <form className="containeer" onSubmit={createContact}>
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
				value={name}
                onChange={(e) => setName(e.target.value) }/>
			</div>

			
			<div className="info-line">
				<i className="fas fa-phone icon-gradient"></i>
				<input type="text" className="type" name="phone-number" placeholder="Numero de telefono"
				value={phone}
                onChange={(e) => setPhone(e.target.value) }/>
			</div>

			<div  className="info-line">
				<i className="fas fa-envelope icon-gradient"></i>
				<input type="text" className="type" name="e-mail" placeholder="Email"
				value={email}
                onChange={(e) => setEmail(e.target.value) }/>
			</div>

			<div className="info-line">
				<i className="fas fa-map-marker-alt icon-gradient location"></i>
				<input type="text" className="type" name="address" placeholder="Direccion"
				value={address}
                onChange={(e) => setAddress(e.target.value) }/>
			</div>
			
		</section>

		<section className="btn-container">
			<div className="update-contact">
				<i  className="fas fa-check-circle icon-gradient"></i>
				<button type="submit" className="button">Guardar Contacto</button>
			</div>
		</section>
		</form>
    )
}

export default New_contact;