const express = require('express');
const auth = require('../middleware/auth');
const { generateDatePlan } = require('../services/aiService');
const prisma = require('../lib/prisma');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    // Generate structured AI plan
    const planJson = await generateDatePlan(req.body);

    // Save to DB (linked to logged-in user)
    const savedPlan = await prisma.datePlan.create({
      data: {
        userId: req.user.id,
        planJson
      }
    });

    res.json({
      success: true,
      planId: savedPlan.id,
      plan: planJson
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

module.exports = router;
