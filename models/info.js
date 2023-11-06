import mongoose from "mongoose";

const infoSchema = new mongoose.Schema({
    cropname: String,
    cropid: Number,
    cid: Number,
    pnumber: Number,
    address: String
}, {
    timestamps: true
});

const Information = mongoose.models.Information || mongoose.model("Information", infoSchema);
export default Information;
