const express = require('express');
const app = express();
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "sql5.freesqldatabase.com",
    user: "sql5469509",
    password: "DMeduSjNL6",
    database:"sql5469509" 
})

app.get("/api/get", (req,res)=>{
    db.query("SELECT * FROM users", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });   
});

app.get("/api/post", (req,res)=>{
    db.query("INSERT INTO users (LastName, FirstName, Token) VALUES ('my-last', 'my-first', 'daskkjh2kh24111')", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });   
});

app.get('/', (req, res) => {
    res.json({
        message: 'Hello, world!'
    });
})

app.listen(8080, () => {console.log('Server started. Listening at localhost:8080')});