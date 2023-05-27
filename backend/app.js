const express = require('express');
const app = express();
const path = require('path');
const db = require('./database');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

const port = 8000;
app.get('/',(req,res)=>{
    res.status(200).render('index');
});

app.post('/dataexport',(req,res)=>{
    const firstname=req.body.fname;
    const lastname=req.body.lname;
    const mail=req.body.mail;
    db.query(`insert into employee values("${firstname}","${lastname}","${mail}")`,(err,res)=>{
        if(err) throw err
         console.log("Data inserted");
    });
    res.send('Data send successfully');
});

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});