const express = require('express')
const router = express.Router()
const cors = require('cors');
const ContactUs = require("../modal/contact");
const app = express();

router.post("/contact",async(req,res)=>{
    const {name, email, message}=req.body;
    try{
        const contactData = new ContactUs({
            name, 
            email,
            message,
        })
        // console.log("data is saved",addData)
        await contactData.save();
        res.status(201).json(contactData);
        // console.log("mongodb data saved",contactData);
    }catch(error){
        // console.log("error here is",error)
        res.status(404).json(error)
    }
})

// app.get("/contact", async(req, res) => {
//     try{
//         const allInfo = await ContactUs.find({});
//         console.log(allInfo)
//         res.send({status: "ok", data: allInfo});
//     }
//     catch(error){
//         console.log(error)
//     }
// })

router.get('/contact', async (req, res, next) => {
    try {
      const contacts = await ContactUs.find();
      res.json(contacts);
    } catch (error) {
      next(error);
    }
  });

module.exports = router
