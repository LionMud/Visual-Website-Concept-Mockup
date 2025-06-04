exports.handler = async function(event, context) {
  // Secret check
  const secret = process.env.NETLIFY_FUNCTION_SECRET;
  const reqSecret = event.headers && (event.headers['x-function-secret'] || event.headers['X-Function-Secret']);
  if (secret && reqSecret !== secret) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Unauthorized' })
    };
  }

  // Parse POST body
  const data = JSON.parse(event.body || '{}');
  const { name, email, message } = data;

  // Basic validation
  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing required fields.' })
    };
  }

  // TODO: Integrate with email service, database, etc.
  // For now, just echo the data back
  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, received: { name, email, message } })
  };
};
