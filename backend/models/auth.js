import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        mobile: { type: String, required: true },
    },
    { timestamps: true }
);

// Hash password before saving
// userSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) return next();
//     this.password = await bcrypt.hash(this.password, 10); // Hashing password
//     next();
// });

const User = mongoose.model("User", userSchema);
export default User;
