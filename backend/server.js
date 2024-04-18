
const express = require('express');
const tripschema = require('./schema/tripmodle')
const app = express();
const PORT = 8080;

const mongoose = require('mongoose');

// Single routing
const router = express.Router();

router.get('/', function (req, res) {
	console.log("Router Working");
	res.send("hi this is backend")
})

// router.post('/bus',require("./controller/controller.js"))
app.post("/bus", async(req,res)=>{ 
    try{
        const trip = await tripschema.find({})
    res.json({trip:trip})
}
catch (error) {
    res.json({
      success: false,
    })
    // await trip.save();
}});

app.use(express.json())
app.use(router);

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});

mongoose.connect("mongodb+srv://abhishek:CVvrFo7qURSasRAW@cluster0.lepilo2.mongodb.net/reserve").then(()=>{
	console.log("mongoose connected")
})
.catch((error)=>{
	console.log(error)
})

//  satori graphics ->
// figma -> intro  
// 1.
// ticket
// 2.
// cat
// 3.
// ginger
// 4.
// razor
// 5.
// hair
// 6.
// project
// 7.
// dwarf
// 8.
// airport
// 9.
// into
// 10.
// forward
// 11.
// nut
// 12.
// display