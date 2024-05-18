import React from 'react'
import "./Contact.css"

import msg_icon from "../../assets/edusity_assets/msg-icon.png"
import mail_icon from "../../assets/edusity_assets/mail-icon.png"
import phone_icon from "../../assets/edusity_assets/phone-icon.png"
import location_icon from "../../assets/edusity_assets/location-icon.png"
import white_arrow from "../../assets/edusity_assets/white-arrow.png"



const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        console.log(event.target)
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "f3fd26c6-522c-41f9-a481-f27526ca56d0");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>

      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} /></h3>
        <p>
            Feel free to reach out through contact form or find our
            contact information below. Your feedbacks, questions and suggestions are 
            importand to us as we strive to provide exceptional service to our
            university community.
        </p>
        <ul>
            <li><img src={mail_icon} />Edusity07@gmail.com</li>
            <li><img src={phone_icon} />+1 123-456-7890</li>
            <li><img src={location_icon} />77 Massachusetts Ave, Cambridge <br />MA 1135,
            United States</li>
        </ul>
      </div>

      <div className="contact-col">

        <form onSubmit={onSubmit}>
            <label>Your Name :</label>
            <input type="text"  name='name' placeholder='Enter your name' required/>
            <label>Phone Number :</label>
            <input type="tel"  name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your messages here :</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} /></button>
        </form>

        <span>{result}</span>

      </div>

    </div>
  )
}

export default Contact
