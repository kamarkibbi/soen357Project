import React from 'react';
import axios from 'axios';

import '../css/main.css'
import '../css/login.css'

import Header from './header';

import logo from '../../img/daylee-logo.png'

function Login() {
  const formRef = React.useRef(null);

  function submitForm(e) {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    console.log([...formData]);

    /* axios.post('/submit', formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      }); */
    }

  return (
    <>
    <Header/>
      <main>
        <section className="sign-up">

            <h1 id="main-title">Daylee</h1>

            <div className="form-container">
                <h2 className="title">Sign Up</h2>
                <form ref={formRef} onSubmit={submitForm}>
                    <div className="form-item">
                        <label htmlFor="first-name">first name</label>
                        <input name='first-name' type="text" id="first-name"></input>
                    </div>
                    <div className="form-item">
                        <label htmlFor="last-name">last name</label>
                        <input name='last-name' type="text" id="last-name"></input>
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">email</label>
                        <input name='email' type="text" id="email"></input>
                    </div>
                    <div className="form-item">
                        <button id='submit'>SUBMIT</button>
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

export default Login;
