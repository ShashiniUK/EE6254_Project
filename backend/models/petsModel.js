import mongoose from "mongoose";
const petSchema = mongoose.Schema(
    {
        Name:{
            type: String,
            required: true,
        },
        Category:{
            type: String,
            required: true,
        },
        birthday:{
            type: String,
            required: true,
        },
        Gender:{
            type: String,
            required: true,
        },
        Discription:{
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, 
    }
);


export const Pet = mongoose.model('Pet', petSchema);


