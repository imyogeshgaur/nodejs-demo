const routes = require('express').Router();
const validateUser = require('../services/validateUser');
const deleteTheUser = require("../services/deleteTheUser");
const updateTheUser = require("../services/updateUser")


routes.get("/",(req,res)=>{
    res.status(200).json({message:"Welcome To Our Backend Api !!!"});
 });
 routes.post("/create",(req,res)=>{
    try {
        console.log(req.body);
       validateUser(req,res);
       res.status(201).send({message:"User Created Sucessfully !!!"})
    } catch (error) {
      console.log(error); 
    }
 });

 routes.put("/update/:id",(req,res)=>{
     try {
         const id = req.params.id;
         updateTheUser(req,res,id);
     } catch (error) {
         console.log(error);
     }
 })

 routes.delete("/delete/:id",(req,res)=>{
    try {
        const id = req.params.id;
        deleteTheUser(res,id);
    } catch (error) {
        console.log(error);
        
    }
 })

 module.exports = routes