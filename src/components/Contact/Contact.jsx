import React from 'react'
import "./Contact.css"
import msg_icon from '../../assets/msg_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import email_icon from '../../assets/email_icon.png'
import location_icon from '../../assets/location_icon.png'

const Contact = () => {

const [result, setResult] = React.useState("");

  // فرض می‌کنیم formData با event.target ها ساخته می‌شود
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append("access_key", "e0d4d1b7-de0e-411b-80fb-3fc199853cfe");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <div className='para'>
        <h3>send us a message <img src={msg_icon} alt="" /></h3>
        <p> contact form or view our contact information below. 
            Your feedback, questions, and suggestions are important to us as
             we strive to provide exceptional service to our cafe community.
             </p>
             <ul>
                <li> <img src={phone_icon} alt="" /> 0912121212 </li>
                <li> <img src={email_icon} alt="" /> FarjudiFatemeh@gmail.com </li>
                <li> <img src={location_icon} alt="" /> IRAN Tehran </li>
             </ul>
             </div>
        </div>    

      <div className="contact-col">
        <form onSubmit={onSubmit}>
           <label >Your Name</label> 
            <input type="text" placeholder="Enter your name"  name='name' required/>
              <label >Phone Number</label>
             <input type="text" placeholder="Enter your phone number"  name='phone' required/>
              <label >Write Your Message here</label>
              <textarea placeholder="Enter your message" name='message' rows="6" required></textarea>
              <button type="submit" className='btn dark-btn'>submit now</button>
        </form>
        <span >{result}</span>
        </div>     
    </div>
  )
}

export default Contact
