const express = require('express');
const app = express();
const path = require('path');
const db = require('./database');
const session = require('express-session');
const transporter = require('./mailer.js');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const port = 8000;
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.get('/', (req, res) => {
    res.status(200).render('index.pug');
});
app.get('/services', (req, res) => {
    res.send('services');
});
app.get('/signup_login', (req, res) => {
    res.status(200).render('signup_login.pug');
});
var i;
app.post('/sign_logsubmit', (req, res) => {
    const fiiname = req.body.fname;
    if (fiiname !== undefined) {                //checking for login or signup form data

        const finame = req.body.fname;
        const laname = req.body.lname;
        const ppwd = req.body.pass;
        const eemail = req.body.mail;
        db.query(`select email from user_credentials where email = "${eemail}"`, (err, result) => {
            //multiple acc check

            if (!result?.[0]?.email) {

                const data = ppwd;
                var password = crypto.randomBytes(32);
                var iv = crypto.randomBytes(16);
                const cipher = crypto.createCipheriv(algorithm, password, iv);
                let encrypt_pwd = cipher.update(data, 'utf-8', 'hex');
                encrypt_pwd += cipher.final('hex'); var isFound = false;
                do {
                    i = Math.floor(Math.random() * 1000000);
                    db.query(`Select C_ID from user_credentials where C_ID = "${i}"`, (err, reslt) => {
                        if (!reslt?.[0]?.C_ID) {
                            var sql = `insert into user_credentials (fname,lname,Pwd,Email,C_Id) Values ("${finame}","${laname}","${encrypt_pwd}","${eemail}","${i}")`;        //inserting in database
                            db.query(sql, (err, resu) => {
                                if (err) throw err
                                console.log('Data inserted');

                            });
                            password = password.toString('base64');
                            iv = iv.toString('base64');
                            var sql = `insert into user_Pwd_keys (User_ID,Pwd_key,Pwd_iv) Values ("${i}","${password}","${iv}")`;        //inserting in database
                            db.query(sql, (err, resu) => {
                                if (err) throw err
                                console.log('Data inserted');

                            });
                            const isSignUp = true
                            res.render('signup_login.pug', { 'isSignUp': isSignUp });
                            const code = crypto.randomBytes(3).toString('hex');
                            const options = {
                                from: "saadtahir5665@gmail.com", // sender address
                                to: `${eemail}`, // list of receivers
                                subject: "Verify Your account", // Subject line
                                text: `Inorder to Verify Your Account please Enter the Code ${code}`, // plain text body
                                html: "<h1>Inorder to Verify Your Account please Enter the Code " + `${code}`, // html body
                            };
                            transporter.sendMail(options, (err, info) => {
                                if (err)
                                    console.log(err);
                                else
                                    console.log("Message send " + info.response);

                            });
                            isFound = false;
                        }
                        else {
                            console.log("Found");
                            isFound = true;
                        }

                    });
                } while ((isFound));
            }
            else {
                const isNotSignUp = true;
                res.status(200).render('signup_login.pug', { 'isNotSignUp': isNotSignUp });

            }

        });

    }
    else {
        const ppwd = req.body.pass;            //login chk
        const eemail = req.body.mail;
        db.query(`select email from user_credentials where email = "${eemail}"`, (err, resultt) => {           //email chk
            if (!resultt?.[0]?.email) {
                const isNotLoggedInn = true;
                res.status(200).render('login.pug', { 'isNotLoggedInn': isNotLoggedInn });
            }
            else {
                var Cust_ID;
                var password;
                var iv;
                db.query(`select C_ID from user_credentials where email = "${eemail}"`, (err, res) => {
                    if (err) {
                        console.log(err);
                    }
                    Cust_ID = res[0].C_ID;
                    db.query(`select u.pwd_key,u.pwd_iv from user_pwd_keys u inner join user_credentials c on c.C_ID=u.User_id where u.User_ID = "${Cust_ID}"`, (err, res) => {
                        if (err) {
                            console.log(err);
                        }
                        password = Buffer.from(res[0].pwd_key, 'base64');
                        iv = Buffer.from(res[0].pwd_iv, 'base64');
                        const cipher = crypto.createCipheriv(algorithm, password, iv);
                        var encoded = cipher.update(ppwd, 'utf-8', 'hex');
                        encoded = cipher.final('hex');
                        db.query(`select Pwd from user_credentials where Pwd = "${encoded}"`, (err, resulttt) => {           //pass chk

                            if (!resulttt?.[0]?.Pwd) {
                                loged(false);
                            }
                            else {
                                loged(true);
                            }
                        });
                    });
                });
            }
        });
        const loged = (chk) => {
            if (chk) {
                const isLoggedIn = true;
                res.status(200).render('login.pug', { 'isLoggedIn': isLoggedIn });
                const session_id = req.session;
                //res.redirect('/');
            }
            else {

                const isNotLoggedIn = true;
                res.status(200).render('login.pug', { 'isNotLoggedIn': isNotLoggedIn });

            }
        }
    }

});
app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug');
});
app.post('/contactsubmit', (req, res) => {
    i++;
    res.send('Data send successfully');
    const finame = req.body.fname;
    const laname = req.body.lname;
    const messg = req.body.msg;
    const eemail = req.body.mail;
    var sql = `insert into contact_us_data (fname,lname,Email,message,CustomerId) Values ("${finame}","${laname}","${eemail}","${messg}","${i}")`;
    db.query(sql, (err, res) => {
        if (err) throw err
        console.log('Data inserted');
    });
});
app.get('/delete_req',(req,res)=>{
  const email=req.body.mail;
  const ppwd = req.body.pass;
  db.query(`select email from user_credentials where email = "${email}" `,(err,result)=>{
    if(!result?.[0]?.email)
    {
        loged(false);
    }
    else
    {
         db.query(`Delete from user_credentials where email= "${email}"`,(err,resultt)=>{
            loged(true);
         });
    }

  });
  const loged = (chk) => {
    if (chk==false) {
        const isNotLoggedInn = true;
        res.status(200).render('login.pug', { 'isNotLoggedInn': isNotLoggedInn });
    }
    else {
        const isDeleted = true;
        res.status(200).render('login.pug', { 'isDeleted': isDeleted });
        const session_id = req.session;
        //res.redirect('/');

       

    }
}

});
app.get('/login', (req, res) => {
    const trytoLogin = true;
    res.status(200).render('login.pug', { 'trytoLogin': trytoLogin })
});
app.get('/snake_hut', (req, res) => {
    res.status(200).render('snake.pug');
});
app.get('/calculator', (req, res) => {
    res.status(200).render('calc.pug');
});
app.get('/clock', (req, res) => {
    res.status(200).render('clock.pug');
});
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});