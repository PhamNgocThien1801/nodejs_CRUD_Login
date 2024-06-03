import mongoose from "mongoose";
const conect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1/f8_education_dev');
        console.log("successful");
    } catch (err) {
        console.log("error roi");
    }
}

export default conect;