import mongoose from "mongoose"

const MONGO_URI = process.env.MONGO_URI as string;

// if (!MONGO_URI) {
//     throw new Error("Invalid mongo uri.")
// }

export async function connectToDB(){
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(MONGO_URI)
        console.log("db connected!!!");
        
    }
}