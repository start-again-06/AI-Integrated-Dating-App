const express = require('express');
const auth = require('../middleware/auth');
const { generateDatePlan } = require('../services/aiService');
const prisma = require('../lib/prisma');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const planJson = await generateDatePlan(req.body);

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

router.post('/:id/accept', auth, async (req, res) => {
  try {
    const planId = req.params.id;

    const plan = await prisma.datePlan.findUnique({
      where: { id: planId }
    });

    if (!plan || plan.userId !== req.user.id) {
      return res.status(404).json({ error: 'Plan not found' });
    }

    await prisma.datePlan.update({
      where: { id: planId },
      data: { accepted: true }
    });

    res.json({
      success: true,
      message: 'Plan accepted'
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/history', auth, async (req, res) => {
  try {
    const plans = await prisma.datePlan.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: 'desc' }
    });

    res.json({
      success: true,
      plans
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
