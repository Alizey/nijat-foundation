const express = require('express');
const path = require('path');
const app = express();

const hbs = require('hbs');
require('./db');
const User = require('./models/user') 
//creating random port to host on internet or 3000 if running locally
const port = process.env.PORT  || 3000;

//console.log(path.join(__dirname, '../nijat_foundation/public'));

const static_path = path.join(__dirname, '../nijat_foundation/public')
const partials_path = path.join(__dirname, '../nijat_foundation/views/partials')

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path))
app.set('view engine' , 'hbs');
 hbs.registerPartials(partials_path);



app.get('/',(req,res)=>{
   res.render('home')
});

app.get('/filloutform' , (req,res)=>{
  res.render('form');
})

//create a new user in our db
app.post('/filloutform' , async (req, res)=>{
     try{
       

         const password=req.body.password;
         const confirmpassword=req.body.confirmpassword;

         if(password===confirmpassword){
         // console.log(req.body.email);
         // res.send(req.body.email);
          //console.log(password);
          //res.send(password);
          //console.log(req.body.loantype);
          //res.send(req.body.loantype);
         
          const userLoan = new User({
            email: req.body.email,
            Password : req.body.password,
            confirmPassword : req.body.confirmpassword,
            Purpose: req.body.loantype,
            fullname: req.body.fullname,
           
            fathername: req.body.fathername,
            address: req.body.address,
            phNumber: req.body.phnumber,
           
            Id_Driving_Passport: req.body. idnumber,
            filename: req.body.filename,   
            amountneeded: req.body.amountneeded,   
            monthlyinstallment: req.body.monthlyinstallment,  
            totalinstallments:req.body.totalinstallments,
            sponsorialname: req.body.sponsorname,
            sponsorialnumber: req.body.sponsornumber,
            sponorialaddress: req.body.sponsoraddress,
            date:req.body.Date
           })
           const Usergotloan = await userLoan.save();
           res.status(201).render(home);

           


         }else{
          res.send('Password not Matched')
         }

     }catch(error){
      res.status(400).send(error);
     }
})

/*app.get('/form-submitted' ,  (req,res)=>{
  res.render(form-submitted);
})*/



app.listen(port, ()=>{
  console.log(`server is running at port no ${port}`);
});