const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogschema = new schema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type : String,
        required:true
    },
    body:{
        type : String,
        required:true
    },
    img: {
        data: Buffer,
        contentType: String
    }
},{timestamps:true});

const blog = mongoose.model('blog',blogschema);
module.exports = blog;