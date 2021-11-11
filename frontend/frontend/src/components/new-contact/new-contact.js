import './new-contact.css';
import {Link} from 'react-router-dom';

const new_contact =() => {
    return (
        <div class="containeer">
			<header class="heroo">
			
			<Link to={'/perfil'}>
			     <i class="fas fa-chevron-circle-left back-btn"></i>
			</Link>

			<div class="heroo-info">
				<h1 class="name"></h1>
				<p class="relationship-heroo"></p>
			</div>
		</header>

		<section class="contactt-info">

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

		<section class="btn-container">
			<div class="update-contact">
				<i  class="fas fa-check-circle icon-gradient"></i>
				<button class="button">Guardar Contacto</button>
			</div>
		</section>
		</div>
    )
}

export default new_contact;