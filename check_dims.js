const sizeOf = require('image-size');
const fs = require('fs');

const images = [
    'public/project-stitchcraft.png',
    'public/project-silentvoice.png',
    'public/project-weenorth.png'
];

images.forEach(img => {
    if (fs.existsSync(img)) {
        const dimensions = sizeOf(img);
        console.log(`${img}: ${dimensions.width}x${dimensions.height}`);
    } else {
        console.log(`${img} not found`);
    }
});
