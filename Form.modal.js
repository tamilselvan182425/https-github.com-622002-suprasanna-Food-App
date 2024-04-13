const mongoose = require ('mongoose');
const schema = mongoose.Schema;

const dataSchema = new schema({
    UserName: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    LandMark: { type: String, required: true },
    PinCode : { type: String, required: true },
    
},{
    timestamp: true 
})


module.exports = mongoose.model('Orders',dataSchema);
