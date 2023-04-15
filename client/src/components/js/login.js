import React from 'react';

import '../css/main.css'
import '../css/login.css'

import Header from './header';

import logo from '../../img/daylee-logo.png'

function Login() {
  return (
    <>
    <Header/>
      <main>
        <section class="sign-up">
            <h1 id="main-title">Daylee</h1>

            <div class="form-container">
                <h2 class="title">Sign Up</h2>
                <form action="">
                    <div class="form-item">
                        <label for="first-name">first name</label>
                        <input type="text" id="first-name"></input>
                    </div>
                    <div class="form-item">
                        <label for="last-name">last name</label>
                        <input type="text" id="last-name"></input>
                    </div>
                    <div class="form-item">
                        <label for="email">email</label>
                        <input type="text" id="email"></input>
                    </div>
                    <div class="form-item">
                        <button id='submit'>SUBMIT</button>
                    </div>
                </form>
            </div>

        </section>

        <section class="img-container">

            <img src={logo} alt="an image of a person pushing a clock"></img>

        </section>
    </main>

    </>
  );
}

const form = document.querySelector('form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const submitBtn = document.querySelector('#submit');

export default Login;