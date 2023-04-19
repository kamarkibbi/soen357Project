import '../css/main.css'
import '../css/productivity.css'
import Header from './header';
import ScheduleTemp from './scheduleTemp';
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