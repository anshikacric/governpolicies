import dotenv from 'dotenv';

import { connectDatabase } from '../config/db.js';
import { seedPolicies } from '../data/seedPolicies.js';
import Policy from '../models/Policy.js';

dotenv.config();

async function seed() {
  try {
    await connectDatabase(process.env.MONGO_URI);

    await Policy.deleteMany({});
    await Policy.insertMany(seedPolicies);

    console.log(`Seeded ${seedPolicies.length} policies successfully.`);
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error.message);
    process.exit(1);
  }
}

seed();
