const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = './public';
const images = [
    { name: 'project-stitchcraft.png', width: 1920, height: 1080 }, // 16:9 for the hero
    { name: 'project-silentvoice.png', width: 1200, height: 900 }, // 4:3 for grid
    { name: 'project-weenorth.png', width: 1200, height: 900 }    // 4:3 for grid
];

async function processImages() {
    for (const img of images) {
        const inputPath = path.join(publicDir, img.name);
        const buffer = await fs.promises.readFile(inputPath);

        console.log(`Processing ${img.name}...`);

        await sharp(buffer)
            .resize({
                width: img.width,
                height: img.height,
                fit: 'cover',
                position: 'center'
            })
            .sharpen() // Mild sharpening to improve perceived quality
            .png({ quality: 90, compressionLevel: 9 })
            .toFile(path.join(publicDir, `optimized-${img.name}`));

        // Overwrite original
        await fs.promises.rename(
            path.join(publicDir, `optimized-${img.name}`),
            inputPath
        );

        console.log(`Finished ${img.name}`);
    }
}

processImages().catch(err => {
    console.error("Error processing images:", err);
});
