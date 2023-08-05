import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to Mongodb database ${conn.connection.host}`.bgGreen
    );
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgCyan.white);
  }
};

export default connectDB;
