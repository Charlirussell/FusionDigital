import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { toastSucess, toastWarning } from '../Toast/ToastMessage';
import Loader from '../Loader/Loader'; 
import phoneIcon from '../../assets/icons/phone-logo.png';
import emailIcon from '../../assets/icons/email-logo.png';
import locationIcon from '../../assets/icons/location-logo.png';
import facebookIcon from '../../assets/icons/facebook-logo.png';
import './Contact.scss';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      
      const formData = new FormData(event.target);
      formData.append('access_key', "179bca6c-83de-4591-8344-dc254b44831b");

      try {
          const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              body: formData,
          });

          const data = await response.json();

          if (data.success) {
              toast.success("Votre email a été envoyé !", toastSucess);
              event.target.reset();
          } else {
            toast.error("Votre email n'a pas pu être envoyé", toastWarning);
          }
      } catch (error) {
          toast.error("Une erreur est survenue lors de l'envoi.", toastWarning);
      } finally {
          setLoading(false);
      }
  };

  return (
      <div className='form-container'>
        {loading && <Loader />}
        <div className='form-left'>
          <h2 className='form-heading'>Nous Contacter</h2>
          <p className='form-paragraph'>Nous sommes à votre écoute ! Que vous ayez une question, un commentaire, ou que vous souhaitiez simplement entrer en contact, n'hésitez pas à nous écrire. Remplissez le formulaire ci-contre, et nous vous répondrons dans les plus brefs délais. Votre satisfaction est notre priorité.</p>
            <div className='icons'>
            <a href='tel:+33638826940' className='icon tel' aria-label='Call us'>
              <img src={phoneIcon} alt='Phone Icon' />
            </a>
            <a href='mailto:charlifusiondigital@gmail.com' className='icon email' aria-label='Email us'>
              <img src={emailIcon} alt='Email Icon' />
            </a>
            <a href='https://www.facebook.com/profile.php?id=61558270923358' target="_blank" className='icon facebook' aria-label='Follow us on Facebook'>
              <img src={facebookIcon} alt='Facebook Icon' />
            </a>
          </div>
          <div className='location-info'>
            <a href='https://www.google.com/maps' target="_blank" className='icon location' aria-label='Find us on the map'>
              <img src={locationIcon} alt='Location Icon' />
            </a>
            <div className='location-paragraph'>
              <p>Lieu 1: Rue de Glasgow, Brest, 29200 </p>
              <p>Lieu 2: Kernanvel, Carnoët, 22160</p>
            </div>
          </div>
        </div>
          <form onSubmit={onSubmit}>
            <div className='form-right'>
              <div className='form-input'>
                <label htmlFor='name'>Nom</label>
                <input type='text' id='name' name='name' required />
              </div>
              <div className='form-input'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' required />
              </div>
              <div className='form-input'>
                <label htmlFor='phone'>Tel</label>
                <input type='tel' id='phone' name='phone' />
              </div>
              <div className='form-input'>
                <label htmlFor='message'>Message</label>
                <textarea id='message' name='message' rows='4' required></textarea>
              </div>
              <button type='submit' disabled={loading}>  
                {loading ? 'Envoi en cours...' : 'Envoyer'} 
              </button>
            </div> 
          </form>
      </div>
  );
};

export default Contact;