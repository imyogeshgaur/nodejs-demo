const User = require('../models/User');

const  updateTheUser = async(req,res,id)=>{
        const {name,email,phone,message} = req.body;
        await User.findByIdAndUpdate({_id:id},{
            nameOfUser:name,
            emailOfUser:email,
            phoneOfUser:phone,
            messageOfUser:message
        });
    res.status(200).json({message:"User Updated !!!"});
}

module.exports = updateTheUser;