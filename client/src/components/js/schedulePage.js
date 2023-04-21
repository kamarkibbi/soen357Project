import '../css/main.css'
import '../css/productivity.css'
import Header from './header';
import ScheduleTemp from './scheduleTemp';
/* import schedule from './schedule'; */
import Timer from './timer';

function SchedulePage() {
    return(
        <>
        <Header/>
        <main>
        <Timer/>  
            <section className="">
                <ScheduleTemp/>

            </section>
        </main>
        </>
    );
}

export default SchedulePage;