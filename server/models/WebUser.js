const { default: mongoose } = require("mongoose");


const WebUserSchema = new mongoose.Schema({
    email: String,
    password:String,
    name:String,
    username:String,
    code:String,
    codeExpire: Date,
    isActive: {
        type:Boolean,
        default: false
    },
    codeCounter: {
        type:Number,
        default: 3
    },
    forgetToken:String
})

const WebUser = new mongoose.model('WebUser', WebUserSchema);

module.exports = {
    WebUser
}