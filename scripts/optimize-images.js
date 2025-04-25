import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '../src/assets/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images');

async function optimizeImages() {
  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Get all image files
    const files = await fs.readdir(IMAGES_DIR);
    
    for (const file of files) {
      if (!['.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase())) continue;
      
      const inputPath = path.join(IMAGES_DIR, file);
      const filename = path.parse(file).name;
      
      // Create WebP version
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(path.join(OUTPUT_DIR, `${filename}.webp`));
      
      // Create optimized original format version
      await sharp(inputPath)
        .jpeg({ quality: 80, progressive: true })
        .toFile(path.join(OUTPUT_DIR, `${filename}.jpg`));
      
      console.log(`✓ Optimized: ${file}`);
    }
    
    console.log('Image optimization complete! ✨');
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImages(); 