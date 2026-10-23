const fs = require('node:fs/promises');
const sharp = require('sharp');

// Simplified code-and-circle mark stays readable at favicon sizes.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="31" fill="#0b0c12"/><circle cx="32" cy="32" r="27" fill="none" stroke="#f45132" stroke-width="3"/><path d="M23 22 13 32 23 42 M41 22 51 32 41 42 M37 17 27 47" fill="none" stroke="#f45132" stroke-width="5" stroke-linejoin="miter"/></svg>`;
(async () => {
  await fs.writeFile('public/favicon.svg', svg);
  await fs.writeFile('public/brand/icon.svg', svg);
  for (const [name, size] of [['favicon-16x16.png',16],['favicon-32x32.png',32],['apple-touch-icon.png',180],['icon-192.png',192],['icon-512.png',512]]) {
    await sharp(Buffer.from(svg)).resize(size,size).png().toFile(`public/${name}`);
  }
  const sizes = [16,32,48];
  const images = await Promise.all(sizes.map(size=>sharp(Buffer.from(svg)).resize(size,size).png().toBuffer()));
  const header = Buffer.alloc(6 + 16 * sizes.length);
  header.writeUInt16LE(1,2);
  header.writeUInt16LE(sizes.length,4);
  let offset = header.length;
  images.forEach((image,i)=>{
    const entry = 6 + 16*i;
    header[entry] = header[entry+1] = sizes[i];
    header.writeUInt16LE(1,entry+4);
    header.writeUInt16LE(32,entry+6);
    header.writeUInt32LE(image.length,entry+8);
    header.writeUInt32LE(offset,entry+12);
    offset += image.length;
  });
  await fs.writeFile('public/favicon.ico',Buffer.concat([header,...images]));
})();
