const fetch = require('node-fetch');

const webhookUrl = 'https://hooks.zapier.com/hooks/catch/23204611/uotxamv/';
const prompt = `List all currently indexed project titles from memory, alphabetically, including a total count and the current date (formatted like Monday, June 24, 2025). Output as a weekly summary.`;

fetch(webhookUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ prompt })
})
.then(res => {
  console.log('Status:', res.status);
  return res.text();
})
.then(body => console.log('Response:', body))
.catch(err => console.error('Error:', err));
