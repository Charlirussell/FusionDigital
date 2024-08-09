import React from 'react';

import './Contact.scss';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Envoi...")
      const formData = new FormData(event.target);

      formData.append("access_key", "179bca6c-83de-4591-8344-dc254b44831b")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.sucess) {
        setResult("Formulaire soumis avec succès");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
      <div className='form-container'>
        <h2>Nous Contacter</h2>
        <form className='form-box' onSubmit={onSubmit}>
          <div className='form-input'>
            <input type="text" name="nom" placeholder="name" required/>
          </div>
          <div className='form-input'>
            <input type="email" name="mail" placeholder="email" required/>
          </div>
          <div className='form-input'>
            <input type="message" name="message" placeholder="message" required/>
          </div>
          <button type='submit'>Envoyer</button>
          
        </form>
        <span>{result}</span>
      </div>
    );
};

export default Contact;