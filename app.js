const express = require('express');
const mySql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app =express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname , "public")));


const db = mySql.createConnection({
  host: "localhost",
  user:"root" ,
  password: "1234",
  database: "skill"
});

db.connect((err) =>{
  if(err){
    console.error("database connection failed" , err);
  }else{
    console.log("connected to mysql");
  }
});

app.get("/api/skills" , (req, res) =>{
    db.query("SELECT * FROM courses", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
});

});

app.get("/api/topics/:skillId" , (req,res) =>{
  const {skillId} = req.params;
  db.query("select * from topics where skill_id =?" , [skillId] ,(err , results)=>{
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
  })
})

const PORT = 3000;

app.listen(PORT , ()=> {
  console.log(`server running at http://localhost:${PORT}`);
});