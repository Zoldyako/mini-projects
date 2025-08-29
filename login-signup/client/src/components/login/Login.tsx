import { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8089/login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                console.log('Login successful', data);
                localStorage.setItem('token', data.token);
            } else {
                setMessage(data.error);
                console.error('Login failed', data.error);
            }
        } catch (error) {
                console.log('Network error', error);
                setMessage('Failed to connect to the server');
        }
    }

    return (
        <>
            <div className='container'>
                <form onSubmit={handleLogin}>
                    <div className='username'>
                        <label htmlFor="username">Your user
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password">Your password
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                    </div>
                    <button type="submit">Log In</button>
                    {message && <p>{message}</p>}
                </form>
            </div>
        </>
    )
}

export default Login;
