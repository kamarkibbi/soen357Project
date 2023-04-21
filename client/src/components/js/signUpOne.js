import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../css/main.css'
import '../css/signUpOne.css'
import '../css/formStyle.css'
import Header from './header'

import logo from '../../img/daylee-logo.png'

function SignUpOne() {

    const formRef = React.useRef(null);

    function submitScheduleOne(e) {
        e.preventDefault();

        const formData = new FormData(formRef.current);

        // Convert FormData to an object
        const data = {};
        formData.forEach((value, key) => data[key] = value);

        //axios post user to backend
        axios.post('/schedule', data);
    }

    return(
    <>
    <Header/>
    <main>
        <section className='sign-up-form-container'>
            <div className="form-container signUpOne">
                <h2>Some questions before we begin...</h2>
                <form ref={formRef} onSubmit={submitScheduleOne}>
                    <div className="upload-schedule form-item signUpOne">
                        <label id='schedule-label' for="schedule">Upload Schedule</label>
                        <input type="file" name="schedule" id="schedule"></input>
                    </div>
                    <div className="form-item signUpOne">
                        <label for="commute">How long is your commute to from home to school?</label>
                        <input type="number" name="commute" id="commute"></input>
                    </div>

                    <div className="form-item signUpOne">
                        <label for="sleep">How many hours do you need to sleep everynight?</label>
                        <input type="number" name="sleep" id="sleep"></input>
                    </div>

                    <div className="form-item signUpOne">
                        <label for="study">How many hours do you aim to study per weeek?</label>
                        <input type="number" name="study" id="study"></input>
                    </div>

                    <div className="form-item signUpOne">
                        <label for="wake-up">How much time do you need to wake up in the morning?</label>
                        <input type="number" name="wake-up" id="wake-up"></input>
                    </div>

                    <div className="form-item signUpOne">
                        <label for="wind-down">How much time do you need to wind down at night?</label>
                        <input type="number" name="wind-down" id="wind-down"></input>
                    </div>

                    <div className="form-item signUpOne">
                        <button id="submit"><Link className='link' to="/signUpTwo">SUBMIT</Link></button>
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

export default SignUpOne;