import './delete.css';
import {Link} from 'react-router-dom';

const Delete =() => {
    return (
        <div class="container">
		<header class="hero">
            <Link to={'/edit'}>
				<i class="fas fa-chevron-circle-left back-btn"></i>
			</Link>
			<div class="hero-info">
				<h1 class="name">Emilia Mernes</h1>
				<p class="relationship-hero">Amigo/a</p>
			</div>
		</header>

		<section class="delete-container">
			<p>Estas seguro/a que quieres eliminar este contacto?</p>
			<div class="delete-contact">
				<i class="fas fa-trash delete-icon"></i>
				<button class="delete-button">Eliminar Contacto</button>
			</div>
		</section>
	</div>
    )
}

export default Delete;