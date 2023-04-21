//Import React and Schedule component
import React from "react";
import Schedule from "./schedule";

// //Import CSS files for main and schedule pages
// import '../css/main.css'
// import '../css/schedule.css'

//Import Header and Timer components
import Header from './header';
import Timer from './timer';

//Define SchedulePage functional component
const SchedulePage = () => {
    /* 
        - Render Header and Timer components, and Schedule component inside a section with a class of "schedule-container"
        - Wrap the components inside a fragment
        - Export the SchedulePage component as default
    */
    return (
        <>
            <Header/>
            <section className="schedule-container">
                <Timer/>
                <div id="schedule-template">
                    <Schedule />
                </div>
            </section>
        </>
    );
};

export default SchedulePage;