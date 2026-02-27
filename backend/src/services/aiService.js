const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateDatePlan(context) {
  const prompt = `
You are an AI date planning assistant.

User A:
Location: ${context.location}
Intent: ${context.intent}
Budget: ${context.budget}
Interests: ${context.interests}

Rules:
- First date only
- Public & safe venues
- Suggest 2 plans + 1 backup

Respond in JSON.
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
}

module.exports = { generateDatePlan };
