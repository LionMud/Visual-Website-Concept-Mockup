const { Client } = require("@notionhq/client");

exports.handler = async function(event) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!databaseId) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Missing NOTION_DATABASE_ID env variable" })
    };
  }
  try {
    const response = await notion.databases.query({ database_id: databaseId });
    return {
      statusCode: 200,
      body: JSON.stringify(response.results)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
