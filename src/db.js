import { connect } from 'mongoose';
import { MONGODB_URI } from './config';

export const connectDB = async () => {
  try {
    await connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');
  } catch (error) {
    console.error('Error connecting to database: ', error);
  }
};
