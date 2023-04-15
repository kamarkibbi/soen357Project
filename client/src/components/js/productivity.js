import '../css/main.css'
import '../css/productivity.css'
import Header from './header';

import productivityImg from '../../img/productivity.png'

function Productivity() {
    return(
        <>
        <Header/>
        <main>
            <section className="p-container productivity">

                <div className="title-container productivity">
                    <h2>Welcome Back!</h2>
                    <h2 id='productivity-improvement'>Your productivity has imporved by 13% since yesterday. Great Job!</h2>
                </div>

                <div className="img-container productivity">

                    <img className='p-img productivity' src={productivityImg} alt=""></img>

                </div>

                <h2>Great Job! Keep it up!</h2>

            </section>

            <section className="tip-container p-container productivity">
                <div className="text-container productivity">
                    <h2 className="tip-title productivity">Tip of the Day</h2>
                    <p className="tip-text productivity">
                        Last week you spent 13 hours commuting. This could have been due to traffic. This weeks schedule
                        will suggest later commute times to avoid time wasted in traffic. study times will be scheduled in
                        smaller slots and to be completed while away from home. </p>
                </div>
            </section>

        </main>
        </>
    );
}

export default Productivity;