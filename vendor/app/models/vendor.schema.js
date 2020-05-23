const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  id: String,
  geoLoc: {
    lat: String,
    long: String
  },
  shopName: String,
  phoneNo: String,
  email: String,
  shopType: { type: String, enum: [1, 2, 3, 4], default: 1 },
  timingIn12:{
    open:String,
    close:String
  },
  timingIn24:{
    open:Number,
    close:Number
  },
  capacityPerHour:Number
});

exports.vendor = mongoose.model('vendor', vendorSchema);