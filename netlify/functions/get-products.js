const fs = require('fs');
const path = require('path');

function parseFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { body: text };
  const yaml = match[1];
  const body = text.slice(match[0].length).trim();
  const data = { body };
  yaml.split('\n').forEach(function(line) {
    const col = line.indexOf(':');
    if (col === -1) return;
    const key = line.slice(0, col).trim();
    let val = line.slice(col + 1).trim().replace(/^["']|["']$/g, '');
    if (val === 'true') val = true;
    if (val === 'false') val = false;
    data[key] = val;
  });
  return data;
}

exports.handler = async function(event, context) {
  try {
    const folder = event.queryStringParameters.folder || 'products';
    const dirPath = path.join(process.cwd(), folder);

    if (!fs.existsSync(dirPath)) {
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'public, max-age=60'
        },
        body: JSON.stringify([])
      };
    }

    const files = fs.readdirSync(dirPath).filter(function(f) {
      return f.endsWith('.md');
    });

    const items = files.map(function(file) {
      const content = fs.readFileSync(path.join(dirPath, file), 'utf8');
      return parseFrontmatter(content);
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=60'
      },
      body: JSON.stringify(items)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
