import mongoose from "mongoose";

mongoose.set('strictQuery', false)
console.log('mongodb url', process.env.DBCONNECTION)
export const connectMongoDB = async () => {
  try {
    const connectDB = await mongoose.connect(`mongodb://65.21.85.17:27017/defendent`);
    console.log(`Database connected: ${connectDB.connection.host}`.cyan.underline);
  } 
  catch (error) {
      console.log(error);
      process.exit(1);
  }
}

