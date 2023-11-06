import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        console.log("Connecting to MongoDB:", uri);
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then (() => console.log("Connected to MongoDB")
        )
        
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

export default connectMongoDB;