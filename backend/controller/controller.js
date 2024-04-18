const tripSchema= require('../schema/tripmodle')

const newTrip = async(req,res)=>{ 
    try{
        const trip = new tripSchema(req.body);
    res.json({trip:trip})
}
catch (error) {
    res.json({
      success: false,
    })
    // await trip.save();
}};

const getTrip = async(req,res)=>{ 
    try{
        const trip = await trip.schema.find({})
    res.json({trip:trip})
}
catch (error) {
    res.json({
      success: false,
    })
    // await trip.save();
}};
module.exports = {getTrip, newTrip}
