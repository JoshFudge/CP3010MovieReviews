import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const customerSchema = new Schema({
    name: String,
    movie: String,
    email: {type: String,  required: true},
});

const Customer = mongoose.model('Infos', customerSchema);
export default Customer;