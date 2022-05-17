const senha = document.getElementById("password");
const email = document.getElementById("email");

const express = ('express');
const session = require ('express-session');
const bodyParser = require('body-parser');
const { append } = require('express/lib/response');

const path = require ('path');
const { dirname } = require('path');

app.use(session({secret:'ahsjaha'}));
app.use(bodyParser.urlencoded({extended:true}));

app.engine('html', require('ejs', renderFile));
app.set('public engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('public', path.join (--dirname, 'public'));

app.post ('/', (req,res)=>{
    if (req.body.password == senha && req.body.login == email){
        req.session.login = email;
        window.location.href = "/pets.html"
    }
    res.render('login.html')
})

app.get ('/', (req,res)=>{
    if (req.session.login){
        res.render("logado");
    }else{
        res.render("index");
    }
    res.render('login.html');
})

const port = 3000;

append.listen(port, ()=> {
    console.log('server is running')
})
