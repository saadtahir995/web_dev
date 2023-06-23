const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const db = require('./database')

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.use(bodyParser.json());
const port = 8000;
app.get('/', (req, res) => {
    res.status(200).render('index');
});
app.get('/contact_us',(req,res)=>{
    res.status(200).render('contact');
});
app.get('/about_us',(req,res)=>{
    res.status(200).render('about');
});
app.get('/more_info',(req,res)=>{
    res.status(200).render('info');
});

app.post('/contactdata',(req,ress)=>{
    const name= req.body.name;
    const msg=req.body.message;
    const email = req.body.email;
    db.query(`INSERT INTO contact_data (user_name, user_email, user_msg) values ("${name}","${email}","${msg}")`,(err,res)=>{
        if(err)throw err;
        ress.send("Data send successfully");
        
    });

});
app.post('/item_data',(req,res)=>{
    const data= req.body;
    var items=[];
    for (let i = 0; i < 4; i++) {
        items[i]=Object.keys(data[i]);   
    }

      
    for (let i = 0; i < 4; i++) {
    items[i].forEach(element => {
        if(data[i][element][2]>0){
        db.query(`INSERT INTO cartitems_data (item_name, item_count, total_bill) values ("${element}","${data[i][element][2]}","${data[i][element][3]}")`,(err,res)=>{
            if(err)throw err;
            
        });
    }
        
        
    });
}
});
app.listen(port,()=>{
    console.log(`listening on port: ${port}`);
});