import React, { useState } from 'react';
import axios from "axios";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [hasSubmitSuccessful, setHasSubmitSuccessful] = useState(false);
  const [hasSubmitFailed, setHasSubmitFailed] = useState(false);
  const [showAllFieldsRequired, setShowAllFieldsRequired] = useState(false);

  const onNameChange = e => {
    setName(e.target.value);
  }
  const onEmailChange = e => {
    setEmail(e.target.value);
  }
  const onSubjectChange = e => {
    setSubject(e.target.value);
  }
  const onMessageChange = e => {
    setMessage(e.target.value);
  }
  
  const onSubmit = () => {
    if (name == "" || email == "" || subject == "" || message == "") {
      setShowAllFieldsRequired(true);
      return;
    } else {
      setShowAllFieldsRequired(false);
    }

    document.querySelector("fieldset").disabled = true;

    const formObj = {
      name,
      email,
      subject,
      message
    };

    axios.post("https://www.enformed.io/w372fn63", formObj)
      .then( () => {
        setHasSubmitSuccessful(true);
      })
      .catch( error => {
        setHasSubmitFailed(true);
        console.log(error);
      });
  }

  return (
    <div className="contact__container">
      <fieldset className="contact__form">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className="contact__input" value={name} onChange={onNameChange}/>

        <label htmlFor="email">Email</label>
        <input type="text" name="email" className="contact__input" value={email} onChange={onEmailChange}/>

        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" className="contact__input" value={subject} onChange={onSubjectChange}/>

        <label htmlFor="message">Message</label>
        <textarea name="message" cols="40" rows="5" className="contact__input" value={message} onChange={onMessageChange}/>

        <button type="button" className="button" onClick={onSubmit}>Send Message</button>
      </fieldset >

      { showAllFieldsRequired && 
        <p className="contact--error">All fields required</p>
      }

      { hasSubmitSuccessful && 
        <p className="contact--success">Message has been sent successfully </p>
      }

      { hasSubmitFailed && 
        <p className="contact--error">There was an error sending a message</p>
      }


    </div>
  );
}

export default Home;