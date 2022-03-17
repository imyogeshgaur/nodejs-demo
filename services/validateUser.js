const User = require('../models/User');
const validator = require('validator');

const validateUser = async(req,res) =>{
    const {name,email,phone,message} = req.body
    const createdUser = new User({
        nameOfUser:name,
        emailOfUser:email,
        phoneOfUser: phone,
        messageOfUser:message
    }); 
    // if(!validator.isEmail(createdUser.emailOfUser)){
    //     // res.status(400).json({message:"Please Enter a Valid Email!!!"})
    // }else if(!validator.isMobilePhone(createdUser.phoneOfUser)){
    //     // res.status(400).json({message:"Please Enter a Valid Phone Number!!!"})
    // }else if(validator.isLength(createdUser.nameOfUser,{min:1,max:6})){
    //     // res.status(400).json({message:"Please Enter a Valid User Name!!!"})
    // }
    // else{
        await createdUser.save();
        // res.status(201).json({message:"User Created Sucessfully !!!"});
    // }     
}

module.exports = validateUser;
