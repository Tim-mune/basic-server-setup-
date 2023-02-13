import mongoose from "mongoose"
const connectDB=(url)=>{
    try {
        mongoose.connect(url)
    } catch (error) {
        console.log(error);
    }
}
export default connectDB