const OpenAI = require("openai");

exports.handler = async function(event) {
  // Secret check
  const secret = process.env.NETLIFY_FUNCTION_SECRET;
  const reqSecret = event.headers && (event.headers['x-function-secret'] || event.headers['X-Function-Secret']);
  if (secret && reqSecret !== secret) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Unauthorized' })
    };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  const { prompt, model = "gpt-4o-mini" } = JSON.parse(event.body || '{}');
  if (!prompt) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing prompt" }) };
  }
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  try {
    const completion = await openai.chat.completions.create({
      model,
      messages: [
        { role: "user", content: prompt }
      ]
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ result: completion.choices[0].message.content })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
