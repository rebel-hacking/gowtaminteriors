const { spawn } = require('child_process');
const http = require('http');

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function main() {
  console.log('Starting preview server on port 5176...');
  const server = spawn('cmd.exe', ['/c', 'npm.cmd', 'run', 'preview', '--', '--port', '5176'], {
    cwd: 'c:\\Users\\rebel\\OneDrive\\Desktop\\emergent-clone'
  });

  server.stdout.on('data', (d) => process.stdout.write(d.toString()));
  server.stderr.on('data', (d) => process.stderr.write(d.toString()));

  await sleep(4000);

  const testRoutes = [
    '/',
    '/about',
    '/services',
    '/projects',
    '/projects/the-vijaya-residence',
    '/contact',
    '/404',
    '/invalid-route-test'
  ];

  console.log('\n--- VERIFYING HTTP ROUTES ---');
  for (const route of testRoutes) {
    try {
      const res = await fetchUrl(`http://127.0.0.1:5176${route}`);
      console.log(`Route [${route}]: Status ${res.status}, Length: ${res.body.length} bytes`);
      if (res.body.includes('Gautam Interiors')) {
        console.log(`  ✓ Contains "Gautam Interiors" in HTML`);
      }
    } catch (err) {
      console.error(`  ✗ Route [${route}] failed:`, err.message);
    }
  }

  console.log('\n--- VERIFYING STATIC ASSETS ---');
  const images = [
    '/images/hero-living.jpg',
    '/images/about-studio.jpg',
    '/images/service-residential.jpg',
    '/images/service-apartment.jpg',
    '/images/service-furniture.jpg',
    '/images/service-painting.jpg',
    '/images/service-party.jpg',
    '/images/project-kitchen.jpg',
    '/images/project-bedroom.jpg',
    '/images/project-commercial.jpg',
    '/images/project-drapery.jpg',
    '/favicon.svg',
    '/robots.txt',
    '/sitemap.xml',
  ];

  let missingAssets = 0;
  for (const img of images) {
    try {
      const res = await fetchUrl(`http://127.0.0.1:5176${img}`);
      if (res.status === 200) {
        console.log(`  ✓ Asset ${img}: 200 OK (${res.body.length} bytes)`);
      } else {
        console.error(`  ✗ Asset ${img}: ${res.status}`);
        missingAssets++;
      }
    } catch (e) {
      console.error(`  ✗ Asset ${img} error:`, e.message);
      missingAssets++;
    }
  }

  console.log(`\nAssets verified. Missing: ${missingAssets}`);

  server.kill('SIGTERM');
  console.log('Preview server stopped.');
  process.exit(missingAssets > 0 ? 1 : 0);
}

main();
