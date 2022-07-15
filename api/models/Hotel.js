import mongoose from 'mongoose';

const {Schema } = mongoose;

const HotelSchema = new mongoosescema.Schema({
    name:{
        type: String,
        require:true
    },
    type:{
        type: String,
        require:true

    },
    city:{
        type: String,
        require: true

    },
    adress:{
        type: String,
        require: true

    },
    adress:{
        type: String,
        require: true
        
    },
    distance:{
        type: String,
        require:true
    },
    photos:{
        type: [String],

    },
    desc:{
        type: String,
        require: true

    },
  
    rating:{
        type: Number,
        min:0,
        max:5
    },

    rooms:{
        type: [String],
    },
    cheapestPrice:{
        type: Number,
        required: true

    },
    featured:{
        type: Boolean,
        default: false,
    },

});


export default mongoose.model("Hotel" , HotelSchema)