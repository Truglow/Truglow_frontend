# Image optimization script for converting PNG to WebP
# This will significantly reduce file sizes while maintaining quality

$publicDir = "public"
$quality = 85

# List of large images to convert
$imagesToConvert = @(
    "hero-slide-1.png",
    "hero-slide-2.png",
    "hero-slide-3.png",
    "hero-slide-4.png",
    "skin-hero.png",
    "hair-hero.png",
    "plastic-hero.png",
    "laser-hero.png",
    "ivdrips-hero.png",
    "gallery-hero-bg.png",
    "procedure-hero-bg.png",
    "contact-hero-bg.png",
    "clinic-reception.png",
    "clinic-waiting-area.png",
    "clinic-treatment-room.png",
    "clinic-equipment.png"
)

Write-Host "Installing sharp for image conversion..." -ForegroundColor Cyan
npm install --save-dev sharp

Write-Host "`nStarting image conversion to WebP format..." -ForegroundColor Green

$convertScript = @"
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = 'public';
const quality = 85;

const images = [
    'hero-slide-1.png',
    'hero-slide-2.png',
    'hero-slide-3.png',
    'hero-slide-4.png',
    'skin-hero.png',
    'hair-hero.png',
    'plastic-hero.png',
    'laser-hero.png',
    'ivdrips-hero.png',
    'gallery-hero-bg.png',
    'procedure-hero-bg.png',
    'contact-hero-bg.png',
    'clinic-reception.png',
    'clinic-waiting-area.png',
    'clinic-treatment-room.png',
    'clinic-equipment.png'
];

async function convertImage(filename) {
    const inputPath = path.join(publicDir, filename);
    const outputPath = path.join(publicDir, filename.replace('.png', '.webp'));
    
    if (!fs.existsSync(inputPath)) {
        console.log(\`⚠️  Skipping \${filename} - file not found\`);
        return;
    }
    
    try {
        const inputStats = fs.statSync(inputPath);
        const inputSizeMB = (inputStats.size / 1024 / 1024).toFixed(2);
        
        await sharp(inputPath)
            .webp({ quality: quality })
            .toFile(outputPath);
        
        const outputStats = fs.statSync(outputPath);
        const outputSizeMB = (outputStats.size / 1024 / 1024).toFixed(2);
        const reduction = (((inputStats.size - outputStats.size) / inputStats.size) * 100).toFixed(1);
        
        console.log(\`✅ \${filename}: \${inputSizeMB}MB → \${outputSizeMB}MB (\${reduction}% reduction)\`);
    } catch (error) {
        console.error(\`❌ Error converting \${filename}:\`, error.message);
    }
}

async function convertAll() {
    console.log('Converting images to WebP format...\n');
    
    for (const image of images) {
        await convertImage(image);
    }
    
    console.log('\n✨ Image conversion complete!');
}

convertAll();
"@

# Save the conversion script
$convertScript | Out-File -FilePath "convert-images.js" -Encoding UTF8

Write-Host "Running conversion script..." -ForegroundColor Yellow
node convert-images.js

Write-Host "`n✨ Conversion complete!" -ForegroundColor Green
Write-Host "Cleaning up temporary files..." -ForegroundColor Cyan
Remove-Item "convert-images.js" -ErrorAction SilentlyContinue
