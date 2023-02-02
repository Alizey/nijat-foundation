const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

const UserSchema= new mongoose.Schema({
    email:{
        type: String,
        required :true,
        unique:true
    },

    Password:{
        type:String,
        required:true
    },

    confirmPassword:{
        type:String,
        required:true
    },

    Purpose:{
        type : String,
        required: true
    },
    fullname:{
        type: String,
        required : true
    },
    fathername:{
        type: String,
        required : true
    },

    address:{
        type: String,
        required : true,
        unique:true
    },

    phNumber:{
        type: Number ,
        required: true,
        unique:true
    },

    Id_Driving_Passport:{
        type: Number ,
        required: true,
        unique:true
    },

    filename:{
        data: Buffer ,
        contentType: String,
        
    },


    amountneeded:{
        type: Number ,
        required: true
    },

    monthlyinstallment:{
          type: Number ,
           required: true
    },

    totalinstallments:{
        type: Number ,
        required: true
    },

    sponsorialname:{
        type: String ,
        required: true
    },

    sponsorialnumber:{
        type: String,
        required: true
    },

    sponorialaddress:{
        type: String ,
        required: true
    }


    

    
}, { timestamps : true })

const User = new mongoose.model('User' , UserSchema);

module.exports = User;