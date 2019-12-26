# About the program
The idea of this project is to provide users a tool to help them track talks from different conferences. 
From the list of conferences, a user can select anyone to get the details about exhibitors,  sponsors, speakers, attendees, and the daily schedule of talks. For every talk, a user can get details about the subject, speakers, moderator, and can ask questions related to that talk.


The graphical design is based on the [work](https://www.behance.net/gallery/71179603/HCIE-App-UIUX-Design) of [Ibrahim Shaqura](https://www.behance.net/ibshaqura).

# Installation
This project is built with Ruby on Rails and React. You'll need to install the following tools in your computer:
-  Ruby and Ruby on Rails,
-  Node.js and Yarn,
-  Postgres database server.  
To get the program, you can download it using this [link](https://github.com/abdellani/conference-schedule/archive/development.zip) or you can use git.
```
git clone git@github.com:abdellani/conference-schedule.git
```
then, access the new folder and run the following commands
```
cd conference-schedule
bundle install
yarn install
```
# Configuration
The first thing to do is to create `.env` file that will tell rails how to connect the `development` and `test` databases. The database is supposed to be Postgres.
```
DB_HOST: "127.0.0.1"
DB_NAME: "con_sch"
DB_NAME_TEST: "con_sch_test"
DB_USER: "consch"
DB_PASSWORD: "supersecretpassword"
```
To create the tables needed by the model, run the following command:
```
rails run db:migrate
```
you can also populate the database using:
```
rails run db:seed
```
# Database
The following schema gives an idea about the relationship between the different models.
- Every Company can participate in conferences as `sponsor` or `exhibitor`, this detail can be found in Participation[ROLE].
- Every User can attend a talk as `attendee`, `moderator` or `speaker`, this detail can be found in Attendance[ROLE].
![ERD](https://raw.githubusercontent.com/abdellani/conference-schedule/docs/docs/ERD.png)
# Run the code
To run the code in the development environment, use
```
rails s -p 3000
```
The frontend (or React) code can be found at `app/javascript/packs/`. Whenever you edit any .js[x] file, by default, the rails server will call `webpack` and transpile the code automatically for you when you refresh the page. 

I stopped that behaviour as it made the refresh too slow after editing any .js[x] file. As a result, you'll need to run the webpack manually :
```
./bin/webpack --watch
```
The deployment to Heroku remains the same despite those changes.
# Get updates
To get the update
```
git origin pull development
```
# Live demo
A live demo is [available here](https://conference-schedule-1.herokuapp.com/).
# Screenshoots
![screenshot1](https://raw.githubusercontent.com/abdellani/conference-schedule/docs/docs/screenshots/ConferenceSchedule1.png)
![screenshot2](https://raw.githubusercontent.com/abdellani/conference-schedule/docs/docs/screenshots/ConferenceSchedule2.png)
![screenshot3](https://raw.githubusercontent.com/abdellani/conference-schedule/docs/docs/screenshots/ConferenceSchedule3.png)
![screenshot4](https://raw.githubusercontent.com/abdellani/conference-schedule/docs/docs/screenshots/ConferenceSchedule4.png)
![screenshot5](https://raw.githubusercontent.com/abdellani/conference-schedule/docs/docs/screenshots/ConferenceSchedule5.png)
![screenshot6](https://raw.githubusercontent.com/abdellani/conference-schedule/docs/docs/screenshots/ConferenceSchedule6.png)
![screenshot7](https://raw.githubusercontent.com/abdellani/conference-schedule/docs/docs/screenshots/ConferenceSchedule7.png)
![screenshot8](https://raw.githubusercontent.com/abdellani/conference-schedule/docs/docs/screenshots/ConferenceSchedule8.png)
# To do
- Implement the reviews system, and the notification system.
- Implement the administration dashboard.
# Author
Mohamed ABDELLANI [Github](https://github.com/abdellani/)
