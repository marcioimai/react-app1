import PropTypes from 'prop-types';
import { useState } from 'react';
import './Login.css';

async function loginUser(credentials) {

    // const url = "https://sistemas.bombeiros.ms.gov.br/ws-auth/fazer-login";
    const url = "http://localhost:8080/login";
    return fetch(url, {
        method: 'POST',
        // headers: { 
        //     'Content-Type': 'application/json'
        // },
        body: JSON.stringify(credentials)
    }).then(data => data.json());
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            login: username,
            senha: password
        });
        setToken(token);
    }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}