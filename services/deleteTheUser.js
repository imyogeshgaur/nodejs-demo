const User = require('../models/User');

const  deleteTheUser = async(res,id)=>{
        await User.findByIdAndDelete({_id:id});
        res.status(200).json({message:"User Deleted !!!"});
}

module.exports = deleteTheUser;