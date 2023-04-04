const MongoClient = require('mongodb').MongoClient;
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
//const User = require("./userSchema")


const uri = "mongodb+srv://hema:hema2001@atlascluster.8dvw8gl.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});



app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


client.connect()
  .then(() => {
    const signup = client.db("Blogging").collection("users");
 
    app.get("/",(req,res)=>{
        res.render("home")
      })

    app.get("/register",(req,res)=>{
        res.render("register")
      })
    
    app.post('/register', (req, res) => {
        const { username, email, password } = req.body;
        const user = new User({ username, email, password });
        console.log(user)
        try {
            signup.insertOne(user)
        //    user.save();
          res.redirect('/login')
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      });

      app.get("/login",(req,res)=>{
        res.render("login")
      })


    console.log("Connected");

    app.listen(3000,(req,res)=>{
        console.log("Listening at Port 3000")
      })

  })
  .catch(err => console.error(err));


 
  

