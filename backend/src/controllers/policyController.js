import Policy from '../models/Policy.js';

function buildQuery({ category, search }) {
  const query = {};

  if (category) {
    query.category = category;
  }

  if (search) {
    query.$or = [
      { title: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } },
      { eligibility: { $regex: search, $options: 'i' } },
      { benefits: { $regex: search, $options: 'i' } }
    ];
  }

  return query;
}

export async function getPolicies(req, res, next) {
  try {
    const { category, search } = req.query;
    const query = buildQuery({ category, search });

    const policies = await Policy.find(query).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: policies.length,
      data: policies
    });
  } catch (error) {
    return next(error);
  }
}

export async function getPoliciesByCategory(req, res, next) {
  try {
    const { category } = req.params;

    const policies = await Policy.find({ category }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      category,
      count: policies.length,
      data: policies
    });
  } catch (error) {
    return next(error);
  }
}

export async function createPolicy(req, res, next) {
  try {
    const policy = await Policy.create(req.body);

    return res.status(201).json({
      success: true,
      data: policy
    });
  } catch (error) {
    return next(error);
  }
}
