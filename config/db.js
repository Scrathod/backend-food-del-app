import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://root:12345@cluster0.0dixxqr.mongodb.net/fod-del').then(()=>{
        console.log("DB Connected");
    })
}