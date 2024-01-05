import React, { useState } from 'react';
import './contact.css';

function Contact() {

    const [user , setUser] = useState(
        {
            Name:'', email:"", subject:"", Message:""
        }
    )
     let value , names 
    const data = (e) => {
        value = e.target.value
        names = e.target.name
        setUser({...user, [names]: value})
    }

    const send = async(e) => {
        const {Name,email ,subject ,Message} = user
        e.preventDefault()
        const option = {
            method: 'POST',
            headers: {
                'Content-Type' : 'aplication/json'
            },
            body : JSON.stringify({
                Name , email ,subject ,Message
            })   
        }
        const send = await fetch('https://react-ecommerce-contact-a3dea-default-rtdb.firebaseio.com/Message.json ', option)
        if (send){
            alert('Message Sent')
        }
        else{
            alert('Error Occoured Message Sent failed')
        }
    }
  return (
    <>
    <div className="contact">
        <div className="container">
            <div className="form">
                <h2>#Contact us</h2>
                <form method='POST' >

                    <div className="box">
                        <div className="lable">
                            <h4>Name</h4>
                        </div>
                        <div className="input">
                            <input type="text" placeholder='Name' value={user.Name} name='Name' onChange={data} />
                        </div>
                    </div>
                    <div className="box">
                        <div className="lable">
                            <h4>Email</h4>
                        </div>
                        <div className="input">
                            <input type="email" placeholder='E-mail' value={user.email} name='email' onChange={data} />
                        </div>
                    </div>
                    <div className="box">
                        <div className="lable">
                            <h4>Subject</h4>
                        </div>
                        <div className="input">
                            <input type="text" placeholder='Subject' value={user.subject} name='subject' onChange={data} />
                        </div>
                    </div>
                    <div className="box">
                        <div className="lable">
                            <h4>Message</h4>
                        </div>
                        <div className="input">
                            <textarea placeholder='Message !' name='Message' value={user.Message}></textarea>                       
                        </div>
                    </div>
                    <button type='submit' onClick={send}>Send</button>




                    
                </form>
            </div>
        </div>
    </div>
      
    </>
  );
}

export default Contact;
