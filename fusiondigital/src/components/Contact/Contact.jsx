import React from 'react';
import { toast } from 'react-toastify';

import { toastSucess, toastWarning } from "../Toast/ToastMessage";

import './Contact.scss';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
      event.preventDefault();
      
      const formData = new FormData(event.target);
      formData.append("access_key", "179bca6c-83de-4591-8344-dc254b44831b");

      try {
          const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              body: formData,
          });

          const data = await response.json();

          if (data.success) {
              toast.success("Formulaire soumis avec succès!", toastSucess);
              event.target.reset();
          } else {
              toast.error(`Erreur: ${data.message}`, toastWarning);
              setResult(data.message);
          }
      } catch (error) {
          toast.error("Une erreur est survenue lors de l'envoi.", toastWarning);
          setResult("Une erreur est survenue lors de l'envoi.");
      }
  };
    return (
      <div className='form-container'>
        <h2 className='form-heading'>Nous Contacter</h2>
        <p className='form-paragraph'>"Nous sommes à votre écoute ! Que vous ayez une question, un commentaire, ou que vous souhaitiez simplement entrer en contact, n'hésitez pas à nous écrire. Remplissez le formulaire ci-contre, et nous vous répondrons dans les plus brefs délais. Votre satisfaction est notre priorité."</p>
        <form className='form-box' onSubmit={onSubmit}>
          <div className='form-input'>
            <input type="text" name="nom" placeholder="Nom" required/>
          </div>
          <div className='form-input'>
            <input type="email" name="mail" placeholder="Email" required/>
          </div>
          <div className='form-input'>
            <input type="number" name="number" placeholder="Numéro"/>
          </div>
          <div className='form-input'>
            <input type="message" name="message" placeholder="Message" required/>
          </div>
          <button type='submit'>Envoyer</button>
          
        </form>
      </div>
    );
};

export default Contact;