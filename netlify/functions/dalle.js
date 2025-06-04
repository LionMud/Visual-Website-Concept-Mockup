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
  const { prompt } = JSON.parse(event.body || '{}');
  if (!prompt) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing prompt" }) };
  }
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  try {
    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: "512x512"
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ url: response.data[0].url })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
