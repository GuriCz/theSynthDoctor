const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Repair = require('../models/Repair.model')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("admin");
});

router.get("/projects", (req, res, next) => {
  const pending= []
  const active=[]
  const closed=[]


  Repair.find()
  .then((result) =>{
    for(one of result){
      if(one.status===0||one.status==1||one.status==5)pending.push(one)
       else if(one.status==2||one.status==3)active.push(one)
       else if(one.status==4)closed.push(one)
    }
    res.render("admin-projects",{pending, active, closed});
  })



  });



  router.get("/projects/workingOn", (req, res, next) => {
    
    
    res.render("admin-workingON");
  });

  router.post("/projects/workingOn",async (req, res, next) => {
    console.log(req.body.caseId)


    if(req.body.newComment){   const existingRepair = await Repair.findById(req.body.caseId);
      existingRepair.comments.push(req.body.newComment);
      await existingRepair.save();}
 


    if(req.body.caseId){
    }
    Repair.findById(req.body.caseId).then((work)=>{
      res.render("admin-workingON", {work});
    })
   
   

  });


module.exports = router;
