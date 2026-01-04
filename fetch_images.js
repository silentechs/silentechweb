const https = require('https');
const fs = require('fs');

const urls = [
    'https://www.stitchcraft.live/',
    'https://www.silentvoice.online/',
    'https://weenorth.vercel.app/'
];

function fetchOgImage(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                const match = data.match(/<meta property="og:image" content="([^"]+)"/);
                if (match && match[1]) {
                    resolve(match[1]);
                } else {
                    resolve(null);
                }
            });
        }).on('error', (err) => reject(err));
    });
}

function downloadImage(url, filepath) {
    if (!url) return;
    const file = fs.createWriteStream(filepath);
    https.get(url, function (response) {
        response.pipe(file);
        file.on('finish', function () {
            file.close();  // close() is async, call cb after close completes.
            console.log(`Downloaded ${url} to ${filepath}`);
        });
    });
}

async function main() {
    console.log("Fetching OG images...");
    const stitchcraftImg = await fetchOgImage(urls[0]);
    const silentvoiceImg = await fetchOgImage(urls[1]);
    const weenorthImg = await fetchOgImage(urls[2]);

    console.log("StitchCraft Image:", stitchcraftImg);
    console.log("Silent Voice Image:", silentvoiceImg);
    console.log("WEE-North Image:", weenorthImg);

    if (stitchcraftImg) downloadImage(stitchcraftImg, 'public/project-stitchcraft.png');
    if (silentvoiceImg) downloadImage(silentvoiceImg, 'public/project-silentvoice.png');
    if (weenorthImg) downloadImage(weenorthImg, 'public/project-weenorth.png');
}

main();
