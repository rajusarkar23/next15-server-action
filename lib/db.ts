import mongoose from "mongoose"

const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) {
    throw new Error("Invalid mongo uri.")
}

export async function connectToDB(){
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log("db connected!!!");
        console.log(process.env.MONGO_URI);
        
        
    }
}