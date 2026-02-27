const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateDatePlan(context) {
  const prompt = `
You are an AI date planning assistant.

User details:
- Location: ${context.location}
- Dating intent: ${context.intent}
- Budget: ${context.budget}
- Interests: ${context.interests}

Rules:
- First date only
- Public and safe venues
- Suitable for women & LGBTQ+ users
- Budget must be respected

Return STRICT JSON in the following format:

{
  "plans": [
    {
      "title": "",
      "venue": "",
      "time": "",
      "reason": "",
      "safety_note": ""
    }
  ],
  "backup_plan": {
    "title": "",
    "venue": "",
    "time": "",
    "reason": ""
  }
}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7
  });

  return JSON.parse(response.choices[0].message.content);
}

module.exports = { generateDatePlan };
