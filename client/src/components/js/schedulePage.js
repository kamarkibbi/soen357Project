import '../css/main.css'
import '../css/productivity.css'
import Header from './header';
import ScheduleTemp from './scheduleTemp';

function SchedulePage() {
    return(
        <>
        <Header/>
        <main>
            <section className="">
                <ScheduleTemp/>

            </section>

        </main>
        </>
    );
}

export default SchedulePage;