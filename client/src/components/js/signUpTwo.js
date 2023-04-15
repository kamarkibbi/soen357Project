import '../css/main.css'
import '../css/signUpOne.css'
import '../css/signUpTwo.css'
import '../css/formStyle.css'
import Header from './header'

import logo from '../../img/daylee-logo.png'

function SignUpTwo() {
    return(
        <>
        <Header/>
        <main>
        <section>
            <div className="form-container signUpTwo">
                <h2>General tasks you would like scheduled explicitly...</h2>
                <form>
                    <div className="form-item signUpTwo">
                        <input type="checkbox" name="workout" id="workout"></input>
                        <label for="workout">Workout</label>
                    </div>

                    <div className="form-item signUpTwo">
                        <input type="checkbox" name="moving" id="moving"></input>
                        <label for="moving">Moving</label>
                    </div>

                    <div className="form-item signUpTwo">
                        <input type="checkbox" name="rest" id="rest"></input>
                        <label for="rest">Rest</label>
                    </div>

                    <div className="form-item signUpTwo">
                        <input type="checkbox" name="eating" id="eating"></input>
                        <label for="eating">Eating</label>
                    </div>

                    <div className="form-item signUpTwo">
                        <input type="checkbox" name="cooking" id="cooking"></input>
                        <label for="cooking">Cooking</label>
                    </div>

                    <div className="form-item signUpTwo">
                        <input type="checkbox" name="walking-pet" id="walking-pet"></input>
                        <label for="walking-pet">Walking Pet</label>
                    </div>

                    <div className="form-item signUpTwo">
                        <input type="checkbox" name="self-care" id="self-care"></input>
                        <label for="self-care">Self Care</label>
                    </div>

                    <div className="form-item">
                        <button id="submit">SUBMIT</button>
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

export default SignUpTwo;