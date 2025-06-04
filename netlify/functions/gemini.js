const { GoogleGenerativeAI } = require("@google/generative-ai");

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
  const { prompt, model = "gemini-1.5-flash" } = JSON.parse(event.body || '{}');
  if (!prompt) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing prompt" }) };
  }
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: "Missing Gemini API key" }) };
  }
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const modelObj = genAI.getGenerativeModel({ model });
    const result = await modelObj.generateContent(prompt);
    const text = result.response.text();
    return {
      statusCode: 200,
      body: JSON.stringify({ result: text })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
