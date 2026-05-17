import fs from 'fs';
import path from 'path';

const urls = [
  '/assets/dar-hero-C6PlYysm.png',
  '/assets/client-1-BOJx1b5b.jpg',
  '/assets/client-2-EvVOUQ1M.jpg',
  '/assets/client-4-q8L74ygW.jpg',
  '/assets/ig-1-NFsim15V.jpg',
  '/assets/ig-2-C9kucY7w.jpg',
  '/assets/ig-4-UGfEbp0R.jpg'
];

async function run() {
  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  for (const url of urls) {
    let filename = url.split('-').slice(0, -1).join('-').replace('/assets/', '') + (url.endsWith('.png') ? '.png' : '.jpg');
    
    if (filename.startsWith('client-')) {
      filename = filename.replace('.jpg', '.png');
    }
    
    const fullUrl = 'https://hair-by-dar-london-final-1.netlify.app' + url;
    console.log('Downloading', fullUrl);
    
    try {
      const res = await fetch(fullUrl);
      if (res.status === 200) {
        const arr = await res.arrayBuffer();
        fs.writeFileSync(path.join(publicDir, filename), Buffer.from(arr));
        console.log('Saved to', path.join(publicDir, filename));
      } else {
        console.log('Failed to fetch', fullUrl, res.status);
      }
    } catch (err) {
      console.log('Error downloading', fullUrl, err.message);
    }
  }
}

run();
