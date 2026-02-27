const express = require('express');
const { generateDatePlan } = require('../services/aiService');
const prisma = require('../lib/prisma');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const plan = await generateDatePlan(req.body);

    const saved = await prisma.datePlan.create({
      data: {
        userId: "demo-user",
        planJson: plan,
      },
    });

    res.json({ success: true, plan });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
