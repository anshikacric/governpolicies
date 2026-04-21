import mongoose from 'mongoose';

export async function connectDatabase(mongoUri) {
  if (!mongoUri) {
    throw new Error('MONGO_URI is missing. Please set it in your environment variables.');
  }

  mongoose.set('strictQuery', true);

  await mongoose.connect(mongoUri, {
    autoIndex: true
  });

  console.log(`MongoDB connected: ${mongoose.connection.host}`);
}
