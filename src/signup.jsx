import React, { useState } from 'react';
import './signup.css';
import axios from 'axios';

const signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:3000/signup", { username, email, password })
        .then()(result => console.log(result))
        .catch()(err=>console.log(err))
    };

    return (
        <div className="signup-container">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <input type="submit" value="Sign Up" />
            </form>
            <div className="footer">
                <p>Already have an account? <a href="/signin">Log in</a></p>
            </div>
        </div>
    );
};

export default signup;
