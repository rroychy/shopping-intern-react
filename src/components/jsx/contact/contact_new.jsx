import React, { useState } from 'react';
import '../../css/contact/contact_new.css';
function Name_input() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [PhoneNumber,setNumber]=useState('');
    const [Comment,setComment]=useState('');
    const handleNameChange = (event)=>{setName(event.target.value);};
    const handleEmailChange = (event)=>{setEmail(event.target.value)};
    const handleNumberChange = (event)=>{setNumber(event.target.value)};
    const handleCommentChange = (event)=>{setComment(event.target.value)};
    return (
        <div className='form-background-container'>
        <div className='page-width page-width-small'>
        <title>Contact Us | AohoShop</title>
        <div className='contact-heading'>
            <h1>Contact</h1>
        </div>
        <div className='form-row'>
            <div className='form-group'>
                <input 
                    type='text'
                    id='name'
                    name='name'
                    className='form-input-textbox-name'
                    placeholder='Name'
                    value={name}
                    onChange={handleNameChange}/>
            </div>
            <div className='form-group'>
                <input 
                    type='email'
                    id='email'
                    name='email'
                    className='form-input-textbox-email'
                    placeholder='Email*'
                    value={email}
                    onChange={handleEmailChange}/>
            </div>
            <div className='form-group'>
                <input
                    type='number'
                    id='PhoneNumber'
                    name='PhoneNumber'
                    className='form-input-textbox-phone'
                    placeholder='10-Digit Phone Number'
                    value={PhoneNumber}
                    onChange={handleNumberChange}/>
            </div>
            <div className='form-group'>
                <textarea
                    className="form-input-textbox-comment"
                    placeholder="Enter your comment here..."
                    value={Comment}
                    onChange={handleCommentChange}/>
            </div>
            <div className='form-button-wrapper'>
                <button className='submit-button'>Submit</button>
            </div>
        </div>
        </div>
        </div>
    );
}
export default Name_input;