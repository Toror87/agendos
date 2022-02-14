import './new_contact.css';
import {Link} from 'react-router-dom';
import {useState} from "react";
import {httpPost} from "../../utils/httpFunctions";
import {useHistory} from 'react-router-dom'
import axios from 'axios';


const New_contact =() => {

	
	const [image, setImage] = useState(null)
	const [name, setName] = useState()
	const [phone, setPhone] = useState()
	const [email, setEmail] = useState()
	const [address, setAddress] = useState()
	const [user,setUser] = useState()

	const history = useHistory ();

	const createContact = (e) => {
		e.preventDefault()
		let formField = new FormData()
		formField.append('name',name)
		formField.append('phone',phone)
		formField.append('email',email)
        formField.append('address',address)
		formField.append('user',user)

		if(image !== null) {
			formField.append('image', image)
		}
		httpPost('api/contacts/', formField, {
			headers:{
				'content-type': 'multipart/form-data'
			}
		})
		.then((res) => {setUser(res.data.user)}).then(history.push('/home'))
		}

	/*const createContact = (e) => {
		e.preventDefault()
		httpPost('api/contacts/', {image: image, name: name, phone: phone, email: email, address: address })
		.then((res) => {setUser(res.data.user)}).then(history.push('/home'))
		}
	/*const addImage = async (e) => {
		e.preventDefault()
		let formField = new FormData()
		formField.append('name',name)
		formField.append('phone',phone)
		formField.append('email',email)
        formField.append('address',address)

		if(image !== null) {
			formField.append('image', image)
		}
		
		let url = 'http://localhost:8000/api/contacts/';
		axios.post(url, formField, {
		  headers: {
			'content-type': 'multipart/form-data'
		  }
		}).then((res) => {setUser(res.data.user)}).then(history.push('/home'))
		  .catch(err => console.log(err))

		
	}*/
	

    return (
        <form className="containeer" onSubmit={createContact} encType="multipart/form-data" >
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
				<input type="file" id="image"  onChange={(e)=>setImage(e.target.files[0])} />
			</div>

			<div className="info-line">
			
				<i className="fas fa-user-circle icon-gradient"></i>
				<input type="text" id="name" className="type" name="fullname" placeholder="Nombre completo"
				value={name}
                onChange={(e) => setName(e.target.value) }/>
			</div>

			
			<div className="info-line">
				<i className="fas fa-phone icon-gradient"></i>
				<input type="text" id="phone" className="type" name="phone-number" placeholder="Numero de telefono"
				value={phone}
                onChange={(e) => setPhone(e.target.value) }/>
			</div>

			<div  className="info-line">
				<i className="fas fa-envelope icon-gradient"></i>
				<input type="text" id="email" className="type" name="e-mail" placeholder="Email"
				value={email}
                onChange={(e) => setEmail(e.target.value) }/>
			</div>

			<div className="info-line">
				<i className="fas fa-map-marker-alt icon-gradient location"></i>
				<input type="text" id="address" className="type" name="address" placeholder="Direccion"
				value={address}
                onChange={(e) => setAddress(e.target.value) }/>
			</div>
			
		</section>

		<section className="btn-container">
			<div className="update-contact">
				<i  className="fas fa-check-circle icon-gradient"></i>
				<button type="submit" className="button" >Guardar Contacto</button>
			</div>
		</section>
		</form>
    )
}

export default New_contact;