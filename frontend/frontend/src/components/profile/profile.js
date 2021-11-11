import './profile.css';
import {Link} from 'react-router-dom';

const Perfil =() => {
    return(
        <div class="containerrr">
          <header class="hero">
              <Link to={'/home'}>
                <i class="fas fa-arrow-circle-left back-btn"></i>
              </Link>
              <div class="hero-info">
                  <h1 class="name">Emilia Mernes</h1>
                  <p class="relationship-hero">Amigo/a</p>
              </div>
          </header>

          <section class="contact-info">
              <div class="info-line">
                <i class="fas fa-phone icon-gradient" t></i>
                  <p class="telefono">000-000-0000</p>
              </div>

              <div class="info-line">
                <i class="fas fa-sms icon-gradient" ></i>
                <p class="SMS">Amigo/a</p>
            </div>
            <div class="info-line">
                <i class="fas fa-envelope icon-gradient" ></i>
                <p class="mail">alguien@gmail.com</p>
            </div>
            <div class="info-line">
                <i id="location" class="fas fa-map-marker-alt icon-gradient location" ></i>
                <p class="direccion"> Calle 1234 depto 2</p>
            </div>
          </section>

          <Link to={'/edit'}>
              <section class="edit-contact">
                  <div class="edit-button">
                    <i class="fas fa-cog icon-gradient"></i>
                  </div>
              </section>
          </Link>
        </div>
    )
}

export default Perfil;

