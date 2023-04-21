# soen357Project

youtube demo:

https://youtu.be/Nu4H1065Gqg

Instructions on how to open website:

1. Clone the Github repository and open it on your favourite IDE
2. cd to the `client` folder with your terminal and run the command `npm i`
3. In the `client` folder, run the command `react-scripts start`
4. cd to the `server` folder with your terminal and run the command `npm i`
5. In the `server` folder, run the command `node app.js`


Explanation of functionalities: (what is working and what is not working)

1. Login Page:

The Daylee landing page provides users with the option to register for the platform by submitting their credentials.

On the landing page, enter your email, first name, last name, and password into the designated fields. Once completed, click the submit button to proceed to the next page.

2. Sign-Up Page 1:

This page is designed to help us understand the user and gather information about their daily schedule and preferences so that we can tailor their experience on the platform accordingly.

On this page, enter the number values for the following fields: class start time, class end time, and break time. The upload schedule is not implemented with the backend, so there is no need to upload a .pdf at this point. Once completed, click the submit button to proceed to the next page.

3. Sign-Up Page 2:

On the second sign-up page, users are presented with a list of tasks that they can explicitly schedule according to their preferences and needs. This feature enables us to generate a personalized schedule for the user, taking into consideration the tasks they prioritize and the areas they want to improve.

On this page, select the boxes of the tasks you would like to schedule explicitly. Once completed, click the submit button to proceed to the next page.

4. Schedule Page:

After completing the sign-up process, users are directed to the daily schedule page where they can access a customized schedule of tasks tailored to their needs. This schedule is designed to help students manage their time more efficiently and effectively, enabling them to complete tasks on time and achieve their academic and personal goals.

On the schedule page, scroll using the mouse wheel to view your daily tasks. You can click on each task to view more details. The data filled in the schedule is hard coded and not representative of the users timetable, as we were unable to link this feature to the back-end. To navigate to the productivity page, click on the "Productivity" tab in the navigation bar.

5. Productivity Page:

The productivity page provides users with a detailed overview of their weekly productivity, highlighting areas for improvement and offering tips to enhance their time management skills further. This feature enables students to track their progress and make informed decisions about their daily routines, ultimately improving their overall productivity and success.

This page contains hard coded data to represent how the page would look in our end service.


It is important to note that both the UI aspect of the Front-end and the functionality of the Backend are complete. It is the linking between both that is causing us trouble. We believe it might be due to a cross-origin error but we are still unsure.

For the Backend, api endpoints were created to:

  - Create a new user `/signup`
  - Log the user in `/login`
  - Store useful user information such as classes, activities, commute, sleepHours, studyHours and wakeWindHours in `/schedule`
  - updating these useful information in `/user`
  - generate an intelligent and coherant schedule for each user specificaly using `/generate_schedule`.

All of the backend works perfectly fine and is very coherant together. The issue was with linking both the client-side to the server-side that causes problem as the data returned from the server to the client is in a format that is ready to use on the front-end, but the front-end needs some json parsing to be compatible with the backend.
