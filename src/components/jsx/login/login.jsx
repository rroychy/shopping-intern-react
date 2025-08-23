import React , {useState} from 'react';
import '../../css/login/login.css';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const handleLogin = async (e) => {
        e.preventDefault();

    const payload = {
        username: username,
        password: password,
    };

    try {
        const res = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        });

    const data = await res.json();

    if (data.token) {
        alert('Login successful!');
        console.log('Token:', data.token);
        setError('');
    } else {
        setError('Invalid credentials');
    }
    } catch (err) {
        console.error('Login failed:', err);
        setError('Login failed. Please try again.');
    }

    // Reset error after 3s
    setTimeout(() => setError(''), 3000);
    };
    return (
    <div className="container">
        <title>Login | AohoShop</title>
        <form className='login-form' onSubmit={handleLogin}>
            <h1>Login</h1>

            <input
                type='text'
                className='login-input'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Username (try mor_2314)'
                required
            />
            <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                className='login-input'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password (try 83r5^_)'
                required
            />
        <div className='forgot-password'>
            <a href='/forgot-password'>Forgot Password?</a>
        </div>
        <div className='login-create'>
        <button type='submit' className='login-button'>Login</button>
        <div className='forgot-password'>
        <a href='/create-account'>Create New Account</a></div></div>
        {error && <p style={{color:'red'}}>{error}</p>}
        </form>
    </div>
    );
};
export default Login;