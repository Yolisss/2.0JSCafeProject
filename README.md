### Template for a Express and React App Project
Create full stack apps with React and Express. Run your client, server and do a restart of your dump db to have a full-stack project working in minutes

# Step by Step instructions - To use this project as your start point
You can follow this instructions and code along with the video - [setup instructions working](https://www.dropbox.com/s/tthmdat3n3vp3be/SettingUpTemplate.mov?dl=0)

### For create the whole project
1. Go to your source directory in your terminal and run the command `git clone https://github.com/Yosolita1978/React-Express-PairProgramming.git NAMENEWDIRECTORY`
![You will something like this in your terminal.](https://github.com/Yosolita1978/screenshoots/blob/main/template/Screen%20Shot%202022-03-20%20at%207.50.46%20PM.png?raw=true)

2. To clean your folder from the owner git, run the command `rm -rf .git` ( - You don't want to work with the git of the owner of this Template)
3. Run the command `git init` to start your git repository 
![You will something like this in your terminal.](https://github.com/Yosolita1978/screenshoots/blob/main/template/Screen%20Shot%202022-10-30%20at%207.21.22%20PM.png?raw=true)

##### TO INSTALL, SET UP AND WORK IN THE SERVER SIDE
4. Go to the server folder in the project (`cd server`) and run the command `npm install`
5. Inside your server folder, create an .env file with `touch .env`
6. Inside your server folder, open the file `.env.example` and copy the file there. 
7. Inside your .env file, paste the string from .env.example and change the variables with the values from the project. For this template, the name of your db is `techtonica1`.
![Your .env file should look like this.](https://github.com/Yosolita1978/screenshoots/blob/main/template/Screen%20Shot%202022-10-30%20at%207.24.50%20PM.png?raw=true)

8.  BACK TO THE TERMINAL - To restore the DB dump file that the project already contain, just run the command `psql -U postgres -f db.sql`. Make sure that you have your Postgres password on hand. The psql console will ask you for your password.  If you had configured your postgres without password just run the command `psql -f db.sql`
9.  At this point you can run the command `npm start` to run your server and it should look like this. 
![You will something like this in your terminal.](https://github.com/Yosolita1978/screenshoots/blob/main/template/Screen%20Shot%202022-10-30%20at%207.28.12%20PM.png?raw=true)

##### NOW, BACK TO THE TERMINAL TO WORK IN YOUR FRONTEND

10. Go to the cliente folder (`cd .. and cd client`) and run the command `npm install`
11. Both server should run now with `npm start`
12. Go to localhost:3000 and you should see something like this
![You will something like this in your terminal.](https://github.com/Yosolita1978/screenshoots/blob/main/template/Screen%20Shot%202022-10-30%20at%207.30.21%20PM.png?raw=true)
