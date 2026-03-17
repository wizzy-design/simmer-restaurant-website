import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const publicDir = path.join(__dirname, '../public');

// Check if directory exists
if (!fs.existsSync(publicDir)) {
  console.error('Public directory not found at:', publicDir);
  process.exit(1);
}

const files = fs.readdirSync(publicDir);

async function uploadFiles() {
  console.log(`Starting upload of ${files.length} files to Cloudinary...`);

  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.error('Missing Cloudinary credentials. Please set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in your .env.local file.');
    process.exit(1);
  }

  const results = [];

  for (const file of files) {
    const filePath = path.join(publicDir, file);
    
    // Skip directories
    if (fs.lstatSync(filePath).isDirectory()) {
      console.log(`Skipping directory: ${file}`);
      continue;
    }

    const fileExt = path.extname(file).toLowerCase();
    let resourceType = 'auto'; // Let Cloudinary decide

    try {
      console.log(`Uploading ${file}...`);
      const result = await cloudinary.uploader.upload(filePath, {
        public_id: path.parse(file).name,
        resource_type: resourceType,
        folder: 'simmer-restaurant', // It's better to organize them in a folder
        use_filename: true,
        unique_filename: false,
      });
      console.log(`✅ Successfully uploaded ${file}: ${result.secure_url}`);
      results.push({ file, url: result.secure_url, status: 'success' });
    } catch (error) {
      console.error(`❌ Error uploading ${file}:`, error.message);
      results.push({ file, error: error.message, status: 'failed' });
    }
  }

  console.log('\n--- Upload Summary ---');
  console.table(results);
  
  // Save results to a file for reference
  const manifestPath = path.join(__dirname, 'upload-results.json');
  fs.writeFileSync(manifestPath, JSON.stringify(results, null, 2));
  console.log(`\nUpload manifest saved to ${manifestPath}`);
}

uploadFiles().catch(console.error);
