import './profile.css';
import {Link} from 'react-router-dom';

const Perfil =() => {
    return(
        <div className="containerrr">
          <header className="hero">
              <Link to={'/home'}>
                <i className="fas fa-arrow-circle-left back-btn"></i>
              </Link>
              <div className="hero-info">
                  <h1 className="name">Emilia Mernes</h1>
                  <p className="relationship-hero">Amigo/a</p>
              </div>
          </header>

          <section className="contact-info">
              <div className="info-line">
                <i className="fas fa-phone icon-gradient" t></i>
                  <p className="telefono">000-000-0000</p>
              </div>

              <div className="info-line">
                <i className="fas fa-sms icon-gradient" ></i>
                <p className="SMS">Amigo/a</p>
            </div>
            <div className="info-line">
                <i className="fas fa-envelope icon-gradient" ></i>
                <p className="mail">alguien@gmail.com</p>
            </div>
            <div className="info-line">
                <i id="location" className="fas fa-map-marker-alt icon-gradient location" ></i>
                <p className="direccion"> Calle 1234 depto 2</p>
            </div>
          </section>

          <Link to={'/edit'}>
              <section className="edit-contact">
                  <div className="edit-button">
                    <i className="fas fa-cog icon-gradient"></i>
                  </div>
              </section>
          </Link>
        </div>
    )
}

export default Perfil;

