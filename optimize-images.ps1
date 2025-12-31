# Image optimization script for converting PNG to WebP
# This will significantly reduce file sizes while maintaining quality

Write-Host "Installing sharp for image conversion..." -ForegroundColor Cyan
npm install --save-dev sharp

Write-Host "`nStarting recursive image conversion to WebP format..." -ForegroundColor Green

$convertScript = @"
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = 'public';
const quality = 80;

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
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
        
        console.log(\`✅ \${filename}: \${inputSizeMB}MB → \${outputSizeMB}MB (\${reduction}% reduction)\`);
    } catch (error) {
        console.error(\`❌ Error converting \${filename}:\`, error.message);
    }
}

async function convertAll() {
    const images = getAllFiles(publicDir);
    console.log(\`Found \${images.length} PNG images to convert.\n\`);
    
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
