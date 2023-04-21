// Import the Link component from react-router-dom
import { Link } from 'react-router-dom';

// Import required dependencies and CSS files
import React from 'react';
import axios from 'axios';

import '../css/main.css';
import '../css/login.css';
import '../css/formStyle.css';

// Import Header component
import Header from './header';

import logo from '../../img/daylee-logo.png';

// Define Login component
function Login() {
    // Create a ref for the form
    const formRef = React.useRef(null);

    // Define function to handle form submission
    function submitForm(e) {
        e.preventDefault();

        // Get form data as a FormData object
        const formData = new FormData(formRef.current);

        // Convert FormData to an object
        const dataObj = {};
        formData.forEach((value, key) => dataObj[key] = value);

        // Add empty values for classes and activities
        formData.append('classes', '');
        formData.append('activities', '');

        // Make a POST request to backend with the form data
        axios.post('http://localhost:8000/signup', dataObj);
    }

    // Render the Login component
    return (
        <>
            {/* Render the Header component */}
            <Header/>

            <main>
                <section className="sign-up">
                    <h1 id="main-title">Daylee</h1>

                    <div className="form-container">
                        <h2 className="title">Sign Up</h2>

                        <form ref={formRef} onSubmit={submitForm}>
                            <div className="form-item">
                                <label htmlFor="email">email</label>
                                <input name='email' type="text" id="email"></input>
                            </div>

                            <div className="form-item">
                                <label htmlFor="firstName">first name</label>
                                <input name='firstName' type="text" id="firstName"></input>
                            </div>

                            <div className="form-item">
                                <label htmlFor="lastName">last name</label>
                                <input name='lastName' type="text" id="lastName"></input>
                            </div>

                            <div className="form-item">
                                <label htmlFor="password">password</label>
                                <input name='password' type="password" id="password"></input>
                            </div>

                            <div className="form-item">
                                {/* Use the Link component to navigate to the signUpOne page */}
                                <button id='submit'><Link className="link" to='signUpOne'>SUBMIT</Link></button>
                            </div>
                        </form>
                    </div>
                </section>

                <section className="img-container">
                    <img src={logo} alt="an image of a person pushing a clock"></img>
                </section>
            </main>
        </>
    );
}

// Export the Login component as the default export
export default Login;