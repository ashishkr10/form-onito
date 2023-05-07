const mongoose = require("mongoose");
const { Schema } = mongoose;

const FormSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  mobile: String,
  govtIDType: String,
  govtID: String,
  guardLabel: String,
  guardName: String,
  email: String,
  emergNo: String,
  address: String,
  state: String,
  city: String,
  country: String,
  pincode: String,
  occupation: String,
  religion: String,
  marital: String,
  blood: String,
  nationality: String,
});

module.exports = FormData = mongoose.model("data", FormSchema);
