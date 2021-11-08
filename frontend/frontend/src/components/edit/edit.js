import './edit.css';
import {Link} from 'react-router-dom';

const Edit =() => {
    return (
        <div class="containerrrr">
			<header class="hero">
			
			<Link to={'/perfil'}>
			     <i class="fas fa-chevron-circle-left back-btn"></i>
			</Link>

			<div class="hero-info">
				<h1 class="name">Emilia Mernes</h1>
				<p class="relationship-hero">Amigo/a</p>
			</div>
		</header>

		<section class="contact-info">

			<div class="info-line">
				<i class="fas fa-user-circle icon-gradient"></i>
				<input type="text" class="type" name="fullname" placeholder="Nombre completo"/>
			</div>

			<div class="info-line">
				<i class="fas fa-sms icon-gradient "></i>
				<input type="text" class="type" name="relationship" placeholder="Relacion"/>
			</div>

			<div class="info-line">
				<i class="fas fa-phone icon-gradient"></i>
				<input type="text" class="type" name="phone-number" placeholder="Numero de telefono"/>
			</div>

			<div  class="info-line">
				<i class="fas fa-envelope icon-gradient"></i>
				<input type="text" class="type" name="e-mail" placeholder="Email"/>
			</div>

			<div class="info-line">
				<i class="fas fa-map-marker-alt icon-gradient location"></i>
				<input type="text" class="type" name="address" placeholder="Direccion"/>
			</div>
			
		</section>

		<section class="button-container">
			<div class="update-contact">
				<i  class="fas fa-check-circle icon-gradient"></i>
				<button class="button">Guardar Contacto</button>
			</div>
		</section>

		<section class="button-container">
			<Link to={'/delete'}>
				<div class="update-contact">
					<i class="fas fa-trash icon-gradient"></i>
					<button class="button">Eliminar Contacto</button>
				</div>
			</Link>
		</section>
		</div>
    )
}

export default Edit;