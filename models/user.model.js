const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    userType : {
        type: String,
        enum: ["user","ngo_admin", "super_admin"],
        default : 'user',
    },

    method : {
        type: String,
        enum: ['local','google',"facebook"],
        default : 'local',
        required: true
    },
    password :{
    type : String,
    select : false
    },

    google :{
    id : {
        type: String,
    },

    },

    facebook :{
    id : {
        type: String,
    },
    
    },
    username : String,
    name: String,
    email: String,
    
    language : String,
    country: String,
   
    createdAt : {type : Date, default: Date.now},
    UpdatedAt : {type : Date, default  : Date.now},
   },

   {
    versionKey: false,
    toJSON:{ transform(doc,ret) {delete ret.password}}
},
   )

   UserSchema.pre('save',async function(next){
    const user = this
    user.password = user.password && (await bcrypt.hash(user.password.trim(),12))
    next();

   })


   UserSchema.pre('findOneAndUpdate', async function ()  {
	this.update( { $set: { updatedAt: new Date() } })
});

const User = mongoose.model("users",UserSchema,"users")

module.exports = User