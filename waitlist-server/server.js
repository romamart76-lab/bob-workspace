const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3334;
const DATA_FILE = path.join(__dirname, 'waitlist.json');

// Ensure data file exists
if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, '[]');

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  if (req.method === 'POST' && req.url === '/api/waitlist') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const { email } = JSON.parse(body);
        if (!email || !email.includes('@')) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid email' }));
          return;
        }
        const list = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        if (list.find(e => e.email === email)) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: true, message: 'Already on the list!' }));
          return;
        }
        list.push({ email, date: new Date().toISOString() });
        fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2));
        console.log(`[${new Date().toISOString()}] New signup: ${email} (total: ${list.length})`);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, message: 'Welcome to the waitlist!' }));
      } catch (e) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Server error' }));
      }
    });
  } else if (req.method === 'GET' && req.url === '/api/waitlist/count') {
    const list = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ count: list.length }));
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Waitlist server running on port ${PORT}`);
});
