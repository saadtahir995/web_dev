const db = require('./database');
const express = require('express');
const app = express();

app.post('/dataexport',(req,res)=>{
    const firstname=req.body.fname;
    const lastname=req.body.fname;
    const mail=req.body.mail;
    db.query(`insert into employee values("${firstname}","${lastname}")`,(err,res)=>{
        if(err) throw err
    });



})


