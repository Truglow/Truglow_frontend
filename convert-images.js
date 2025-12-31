const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = 'public';
const quality = 80;

function getAllFiles(dirPath, arrayOfFiles) {
    if (!fs.existsSync(dirPath)) return arrayOfFiles || [];
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            const ext = file.toLowerCase();
            if (ext.endsWith('.png') || ext.endsWith('.jpg') || ext.endsWith('.jpeg')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

async function convertImage(inputPath) {
    const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const filename = path.basename(inputPath);

    try {
        const inputStats = fs.statSync(inputPath);
        const inputSizeMB = (inputStats.size / 1024 / 1024).toFixed(2);

        await sharp(inputPath)
            .webp({ quality: quality, effort: 6 })
            .toFile(outputPath);

        const outputStats = fs.statSync(outputPath);
        const outputSizeMB = (outputStats.size / 1024 / 1024).toFixed(2);
        const reduction = (((inputStats.size - outputStats.size) / inputStats.size) * 100).toFixed(1);

        console.log(`✅ ${filename}: ${inputSizeMB}MB → ${outputSizeMB}MB (${reduction}% reduction)`);
    } catch (error) {
        console.error(`❌ Error converting ${filename}:`, error.message);
    }
}

async function convertAll() {
    console.log('Scanning for images (PNG, JPG, JPEG)...\n');
    const images = getAllFiles(publicDir);
    console.log(`Found ${images.length} images to convert.\n`);

    for (const image of images) {
        await convertImage(image);
    }

    console.log('\n✨ Image conversion complete!');
}

convertAll();
