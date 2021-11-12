import './delete.css';
import {Link} from 'react-router-dom';

const Delete =() => {
    return (
        <div className="container">
		<header className="hero">
            <Link to={'/edit'}>
				<i className="fas fa-chevron-circle-left back-btn"></i>
			</Link>
			<div className="hero-info">
				<h1 className="name">Emilia Mernes</h1>
				<p className="relationship-hero">Amigo/a</p>
			</div>
		</header>

		<section className="delete-container">
			<p>Estas seguro/a que quieres eliminar este contacto?</p>
			<div className="delete-contact">
				<i className="fas fa-trash delete-icon"></i>
				<button className="delete-button">Eliminar Contacto</button>
			</div>
		</section>
	</div>
    )
}

export default Delete;