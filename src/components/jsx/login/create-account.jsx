import React , {useState} from 'react';
import '../../css/login/create-account.css';
function Create() {
    const [first_name , setName] = useState('');
    const [last_name , setLastName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const handle_new_account = async (e) => {
        e.preventDefault();

        const payload = {
            email:email,
            username: email.split('@')[0],
            password: password,
            name : {
                firstname: first_name,
                lastname: last_name
            }
        };
        try {
            const response = await fetch ('https://fakestoreapi.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(payload)
            });
            const data = await response.json();
            console.log('Account Created :',data);
            alert('Account Created Successfully!');
        } catch (err) {
            console.error ('Error',err);
            alert('Failed to create account');
        }  
    };
    return (
    <div className='container'> {/*taking container value of login.css file*/}
            <title>Create Account | AohoShop</title>
        <form className='create-account' onSubmit={handle_new_account}>
            <h1>Create Account</h1>
            <input
                type='text'
                id='first-name'
                className='create-account-input'
                value={first_name}
                onChange={(e) => setName(e.target.value)}
                placeholder='First Name'
                required/>
            <input
                type='text'
                id='last-name'
                className='create-account-input'
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                placeholder='Last Name'
                required/>
            <input
                type='email'
                id='email'
                className='login-input'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                required/>
            <input
                type='text'
                id='password'
                className='create-account-input'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder='Password'
                required/>
            <button type='submit' className='create-account-button'>Create Account</button>
            <div className='forgot-password'>
            <a href='/login'>Back to Login</a></div>
        </form>
        </div>
    );
}
export default Create;