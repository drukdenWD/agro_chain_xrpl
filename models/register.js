import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (v) => {
                // Use a regular expression or a library like validator.js to validate email format
                // Return true if valid, false if not
            },
            message: 'Invalid email format',
        },
    },
    password: String,
    confirmpassword: String,
    wallet:String,
}, {
    timestamps: true
});
const registerInfo = mongoose.models.registerInfo || mongoose.model("registerInfo", registerSchema);
export default registerInfo;
