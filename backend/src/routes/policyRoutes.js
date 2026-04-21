import { Router } from 'express';
import {
  createPolicy,
  getPolicies,
  getPoliciesByCategory
} from '../controllers/policyController.js';

const router = Router();

router.get('/', getPolicies);
router.post('/', createPolicy);
router.get('/:category', getPoliciesByCategory);

export default router;
