const express = require('express');
const port = 2612;
const path = require('path');
const app = express();

app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const validate = (req, res, next) =>{
    if(req.query.pass ==12345){
        next();
    }else{
        return res.redirect('/');
    }
}

app.get('/', (req, res)=>{
    return res.render('index');
})
app.get('/forms',validate, (req, res)=>{
    return res.render('forms');
})
app.get('/table',validate, (req, res)=>{
    return res.render('table');
})

app.listen(port, ()=>{
    console.log(`Server start at http://localhost:${port}`);
})

