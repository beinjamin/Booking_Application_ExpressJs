import mongoose from 'mongoose';

const {Schema } = mongoose;

const HotelSchema = new mongoosescema.Schema({
    name:{
        type: String,
        require:true
    },
    type:{
        type: String,
        require: true

    }
})