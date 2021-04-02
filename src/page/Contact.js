import React, { useState } from 'react';

const Home = () => {
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const onNameChange = e => {
    setName(e.target.value);
  }
  const onSubjectChange = e => {
    setSubject(e.target.value);
  }
  const onMessageChange = e => {
    setMessage(e.target.value);
  }

  return (
    <div className="contact__container">
      <form className="contact__form">
        <label for="name">Name</label>
        <input type="text" name="name" className="contact__input" value={name} onChange={onNameChange}/>

        <label for="subject">Subject</label>
        <input type="text" name="subject" className="contact__input" value={subject} onChange={onSubjectChange}/>

        <label for="message">Message</label>
        <textarea name="message" cols="40" rows="5" className="contact__input" value={message} onChange={onMessageChange}/>

        <button type="button" className="button">Send Message</button>
      </form>


    </div>
  );
}

export default Home;