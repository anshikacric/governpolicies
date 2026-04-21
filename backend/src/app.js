import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import policyRoutes from './routes/policyRoutes.js';

const app = express();

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (_, res) => {
  res.status(200).json({
    success: true,
    message: 'Policy service is healthy'
  });
});

app.use('/policies', policyRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`
  });
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  if (error.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: Object.values(error.errors).map((item) => item.message)
    });
  }

  return res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Internal server error'
  });
});

export default app;
