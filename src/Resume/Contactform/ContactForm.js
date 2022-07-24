import React from 'react'
import './ContactForm.css'
export default function ContactForm(){
    return(
        <div className='ContactForm'>
            <h1>Contact Form</h1>
            <div className='ContactFormFlex'>
            <input type="Name" required placeholder='Name'/>
            <input type="email" required placeholder='Email Address'/>
            <input type="text" required id="description" placeholder='Comments' maxLength={350} />
            <input type="submit" value="Submit" id="submit"/>
            </div>
        </div>
    )
}