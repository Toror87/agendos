import './delete.css';
import {Link, useLocation} from 'react-router-dom';
import {httpDelete} from "../../utils/httpFunctions";
import {useHistory} from "react-router-dom";

const Delete =(props) => {
	const location = useLocation()
	let contact_id = location.profileProps.contact_id
	let contact_name = location.profileProps.contact_name

	const history = useHistory()

	const deleteContact = () => {
		httpDelete(`api/contacts/${contact_id}`).then(history.push('/home'))
	}

    return (
        <div className="container">
		<header className="hero">
            <Link to={'/edit'}>
				<i className="fas fa-chevron-circle-left back-btn"></i>
			</Link>
			<div className="hero-info">
				<h1 className="name">{contact_name}</h1>
				<p className="relationship-hero">Amigo/a</p>
			</div>
		</header>

		<section className="delete-container">
			<p>Estas seguro/a que quieres eliminar este contacto?</p>
			<div className="delete-contact">
				<i className="fas fa-trash delete-icon"></i>
				<form onSubmit={deleteContact}>
				<button type="submit" className="delete-button">Eliminar Contacto</button>
				</form>
			</div>
		</section>
	</div>
    )
}

export default Delete;