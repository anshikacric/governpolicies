import dotenv from 'dotenv';

import app from './app.js';
import { connectDatabase } from './config/db.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

async function bootstrap() {
  try {
    await connectDatabase(process.env.MONGO_URI);

    app.listen(PORT, () => {
      console.log(`Backend server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to start the server:', error.message);
    process.exit(1);
  }
}

bootstrap();
