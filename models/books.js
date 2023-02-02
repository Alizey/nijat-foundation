const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema= new Schema({
    title:{
        type: String,
        required :true
    },

    author:{
        type : String,
        required: true
    },
    pages:{
        type: Number,
        required : true
    },
    ratings:{
        type: Number,
        required : true
    },

    genres:{
        type: Array,
        required : true
    },

    reviews:{
        type: String ,
        required: true
    }
    
}, { timestamps : true })

const Book = mongoose.model('book' , bookSchema)

module.exports = Book;