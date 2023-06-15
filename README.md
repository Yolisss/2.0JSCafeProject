<h1>JavaSweet Cafe</h1>
<br></br>

![3](https://user-images.githubusercontent.com/106282120/203226696-8793cafc-a7c7-43df-a5b6-d97ca687f52c.png)

<section>
<b><h3>Project Description:</h3></b>
Java Sweet Cafe is a space for coffee lovers to log into their account to have accessibility to a list of either our hot or cold coffees. These unique hot and cold coffees hold special ingredients made from JS Café that allows users to be able to make these beverages right at home. The purpose of this App is allowing users to learn how to make these drinks at home and save money. On top of that, coffee lovers also have the option to document any drinks that they may have created on their own. 
</section>

<h2>Test Site Here</h2>
<a align="center" href="https://server-h05o.onrender.com" >JAVASWEET CAFE DEPLOMENT</a>
<br></br>
<h2>Mock User Accounts(can be used to test site)</h2>
<table><p>Email</p></table>
<li>Diana@catmama.com</li>
<li>Kim@pinklover.com</li>
<li>Xochitl@turtlemama.com</li>
<br></br>
<table><p>Password</p></table>
<li>Diana's password: #Diana!3</li>
<li>Kim's password: #KimDang3!</li>
<li>Xochitl's password: #Xochitl4!</li>
<br></br>
<b><h2>Goal for users</h2></b>
<li>Provide user access to the Cafe's ingredients so clients can make the drinks at the comfort of their own home. Allows users to save money as they're learning how to make these drinks at home.</li> 
<li>Allows users to create and store drinks that they've worked on, on the app.</li> 

<h2> Techstack </h2>
   <table align="center">
  <tr align="center">
    <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202346526-a5ff4025-f329-4869-9bf2-a55c438acce4.png" height="30px"><br>HTML</td>
    <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202346792-38f643ef-1547-437c-be94-934896ffb419.png" height="30px"><br>CSS</td>
    <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202346924-4c884b4b-2ae1-4c99-96e3-5928237c2608.png" height="30px"><br>JavaScript</td>
    <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202349986-4508269e-0ccc-4557-8387-b200fd48eff5.png" height="30px"><br>Express</td>
  </tr>
     <tr align="center">
    <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202350485-fbca3896-cdf0-42b6-bace-5ff4130d0745.png" height="30px"><br>React</td>
    <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202350785-7c97d6ee-cfdd-42d8-bf66-754ebf06609b.png" height="30px"><br>Node JS</td>
        <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202349804-b01c7de8-8a26-477d-87b7-6533268deafe.png" height="30px"><br>postgreSQL</td>
         <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202370441-e6500520-443f-46c0-8062-243cfdf0ee84.png" height="30px"><br>emailJS</td>
  </tr>
</table>
<h1>APIs</h1>
<image src="https://user-images.githubusercontent.com/76704309/202351473-c2b9308b-9fd1-4dd6-980e-108bb1eb8731.png" height="50px"> 
Auth0
<br></br>
</image>
<image src="https://static.vecteezy.com/system/resources/previews/002/412/377/original/coffee-cup-logo-coffee-shop-icon-design-free-vector.jpg" height="50px">
  </image>
  CoffeeAPI
  
  <h1>Minimum Viable Product</h1>
  <h2>Tier 1</h1>
  <li>User Registration</li>
  <li>Provide list of hot and cold coffees from API</li>
  <br></br>
  <h2>Tier 2</h2>
  <li>Set up drink form</li>
  <li>Allow users to add drink of their own</li>
  <li>Delete functionality button</li>
  <br></br>
  <h2>TIer 3</h2>
  <li>Get "facts" card functionality working</li>
  <li>Allow users to recieve new facts each time they pressed "get coffee facts" button</li>
  
  <h2 align="center">Drawing Board/Planning Phase</h2>
<h3 align="center"> Official Database Schema </h3>
<h4 align="center">User</h4>
<table align="center">
  </tr>
  <tr>
    <th>User_id</th>
    <th>Name</th>
    <th>Email</th>
  </tr>
</table>
<h4 align="center">Drink</h4>
<table align="center">
  <tr>
    <th>post_id</th>
    <th>User_Id</th>
    <th>Beverage Name</th>
    <th>Ingredients</th>
  </tr>
  <tr>
    <td>Integer (Primary Key)</td>
    <td>Text</td>
    <td>Text</td>
  </tr>
</table>
</table>

<h5 align="center">Original Schema</h5>
<h2align="center">Wireframe</h2>
<img height="500px" width="100%" src="https://github.com/Yolisss/2.0JSCafeProject/assets/106282120/856e82e0-80ce-48f7-97f6-05d997f20f7d">
<img height="500px" width="100%" src="https://github.com/Yolisss/2.0JSCafeProject/assets/106282120/8a9a0b37-69b5-4970-a949-7169b9a5b120">
<img height="500px" width="100%" src="https://github.com/Yolisss/2.0JSCafeProject/assets/106282120/c4483b49-688b-44d6-8a70-2e18076fee75">

<h2 >Installation</h2>
<h3>Node</h3>
I strongly recommend using a Node version manager like <a href="https://www.w3schools.com](https://github.com/nvm-sh/nvm"></a> 
To install Node.js and npm 
<h3>Install</h3>
*Disclaimer: The app uses Auth0 and requires an Auth0 domain + ClientId to use. As wellas email JS, which requires an emailJS account: service id, domain id and template id*<br>
Clone the repo:<br>
<br><code>https://github.com/Yolisss/2.0JSCafeProject</code>
<br>To clean your folder from the owner git, run the command:
<br><code>rm -rf .git</code>
<br>Run the command to start your directory:
<br><code>git init</code>
<br>Go to the server folder in the project:
<br><code>cd server</code>
<br>Install all NPM packages using this in the root directory:
<br><code>npm install</code>
<br>Inside your server folder, create an .env file with:
<br><code>touch .env</code>
<br>Inside your .env add:
<br><code>postgres://localhost:5432/AnimeTracker</code>
<br>BACK TO THE TERMINAL:<br>
<br>To restore the DB dump file that the project already contain, just run the command:
<br><code>psql -U postgres -f db.sql</code>
<br>If you had configured your postgres without password just run the command:
<br><code>psql -f db.sql</code>
<br><code>npm start</code>
<br>Go to client folder:
<br><code>cd ..</code>
<br><code>cd client</code>
<br><code> npm install</code>
<br>Both server and Client can run with:
<br><code>npm start</code>
  <h2>Testing</h2>
  <h3>Jest Testing</h3>
  To run tests on the terminal, go to the Clien side and run the following command:
  <code>npm test</code>
                                                                                                                               
