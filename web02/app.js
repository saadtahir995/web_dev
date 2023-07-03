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
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 300000, // Session duration in milliseconds
    },
  }));
  
const port = 8000;
app.get('/', (req, res) => {
    res.status(200).render('htmls/dashbd');
});
app.get('/contact_us',(req,res)=>{
    res.status(200).render('htmls/contact');
});
app.get('/about_us',(req,res)=>{
    res.status(200).render('htmls/about');
});
app.get('/more_info',(req,res)=>{
    res.status(200).render('htmls/info');
});
app.get('/userlogin',(req,res)=>{

    if(req.session.username)
    {
        res.redirect('/mainpage');
    }
    else{
   
    res.status(200).render('htmls/userlogin');
    }
});
app.get('/usersign',(req,res)=>{

   
    res.status(200).render('htmls/usersign');
});
app.get('/adminlogin',(req,res)=>{

    res.status(200).render('htmls/adminlogin');
});
app.post('/usersignupreq',(req,ress)=>{
    const data =req.body;
    if(Object.keys(data).length === 0)
    {
        return ress.status(400).json({ error: 'No data sent.' });
    }
    else{
        db.query(`Select user_email from user_cred where user_email = "${req.body.email}"`, (err, result) => {
            if (!result?.[0]?.user_email) {
                db.query(`INSERT INTO user_cred (user_name, user_email, user_pwd) values ("${req.body.f_name}","${req.body.email}","${req.body.pwd}")`,(err,res)=>{
                    if(err)throw err;
                    ress.render('htmls/signsuc');
                    
                });

            }
            else
            {
                ress.render('htmls/signupf');
            }

        });

   
}
});

app.post('/userchk',(req,ress)=>{

    const mail= req.body.email;
    const pass= req.body.pwd;

    
    db.query(`Select user_email from user_cred where user_email = "${mail}"`, (err, result) => {
        if (!result?.[0]?.user_email) {
            ress.render('htmls/usrlogf');

        } else {
            db.query(`Select * from user_cred where user_pwd = "${pass}" and user_email = "${mail}"`, (err, resultt) => {
                if (!resultt?.[0]?.user_pwd) {
                    ress.render('htmls/usrlogf');

                } else {
                    req.session.username=resultt[0].user_name;
                    req.session.logedin=true;
                    ress.redirect('mainpage');

                }

            });



        }


    });
});

app.get('/mainpage',(req,res)=>{
    if(req.session.username)
    {
    const name= req.session.username;
    res.status(200).render('htmls/index',{name});
    }
    else{
        res.render('htmls/userlogin');
    }
});

app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.status(200).render('htmls/userlogin');
});
app.post('/adminchk',(req,ress)=>{

    const mail= req.body.email;
    const pass= req.body.pwd;
    db.query(`Select user_email from admin_cred where user_email = "${mail}"`, (err, result) => {
        if (!result?.[0]?.user_email) {
            ress.render('htmls/alogf');

        } else {
            db.query(`Select user_pwd from admin_cred where user_pwd = "${pass}"`, (err, resultt) => {
                if (!resultt?.[0]?.user_pwd) {
                    ress.render('htmls/alogf');

                } else {
                    db.query(`Select * from cartitems_data`,(err,result)=>{
                        ress.status(200).render('htmls/admin_index',{result});
                    });

                    


                }

            });



        }


    });

});

app.post('/contactdata',(req,ress)=>{
    const data =req.body;
    if(Object.keys(data).length === 0)
    {
        return ress.status(400).json({ error: 'No data sent.' });
    }
   else{
    const name= req.body.name;
    const msg=req.body.message;
    const email = req.body.email;
    db.query(`INSERT INTO contact_data (user_name, user_email, user_msg) values ("${name}","${email}","${msg}")`,(err,res)=>{
        if(err)throw err;
        ress.send("Data send successfully");
        
    });
}

});
app.post('/item_data',(req,res)=>{
    const data= req.body;
    if (Object.keys(data).length === 0) {
        return res.status(400).json({ error: 'No data sent.' });
    }
    else
    {
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
    }

});

app.post('/dispatch',(req,res)=>{

    if(req.body.length>0)
    {
            db.query(`delete from cartitems_data`,(err,result)=>{
                if(err)throw err;
            });
        }
        

    
});
app.post('/dbupdate',(req,res)=>{

    if(req.body.length>0)
    {
        const data=req.body;
            
                
            var items=[];
    for (let i = 0; i < 4; i++) {
        items[i]=Object.keys(data[i]);   
    }

      
    for (let i = 0; i < 4; i++) {
    items[i].forEach(element => {
        if(data[i][element][0]>0){
        db.query(`INSERT INTO cartitems_data (item_name, item_count, total_bill) values ("${element}","${data[i][element][0]}","${data[i][element][1]}")`,(err,res)=>{
            if(err)throw err;
            
        });
    }
        
        
    });
}

            
        }
        

    
});

app.post('/update_cart',(req,res)=>{
    const data=req.body;
    req.session.data=data;
    res.redirect('/update');
});
app.get('/update',(req,res)=>{
    const data=req.session.data;
    db.query(`Select * from cartitems_data`,(err,result)=>{
        
        res.status(200).render('htmls/updatecart',{data,result});
    });
   
});
app.listen(port,()=>{
    console.log(`listening on port: ${port}`);
});