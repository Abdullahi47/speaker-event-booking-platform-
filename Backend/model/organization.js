const mongoose = require("mongoose")

const organizationschema = new mongoose.Schema({
    Name:{
        type: String,
        required : true,
    },
    Photo :{
        type: String,
        required : true,
        
    },
     Number :{
        type: String,
        required : true,
        
    },
     Rate :{
        type: String,
        required : true,
        
    },
     Joined :{
        type: String,
        required : true,
        
    },
     Expert :{
        type: String,
        required : true,
        
    },
     Experience :{
        type: String,
        required : true,
        
    },
     Weight:{
        type: String,
        required : true,
        
    },


})
module.exports = mongoose.model("image", organizationschema)