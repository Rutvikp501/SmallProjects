const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const payoutbackupSchema = new Schema({
    req_id: { type: Number, required: true, unique: true },
    clientcode: { type: String, required: true, },
    account: { type: String, trim: true, },
    amount: { type: String, trim: true, required: true },
    ifscode: { type: String, trim: true, },
    bankname: { type: String },
    clientname: { type: String },
    banknames: { type: String },
    email: { type: String },
    mobile: { type: String },
    status: { type: Number, default: 0 },
    rejectedreason: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date }
});

const payoutbackups =mongoose.model('payoutbackups',payoutbackupSchema)
module.exports =  payoutbackups;