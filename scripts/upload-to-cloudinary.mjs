import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

if (!process.env.VITE_CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  console.error('❌ Missing Cloudinary credentials in .env file');
  console.error('Add these to your .env file:');
  console.error('  VITE_CLOUDINARY_CLOUD_NAME=<your-cloud-name>');
  console.error('  CLOUDINARY_API_KEY=<your-api-key>');
  console.error('  CLOUDINARY_API_SECRET=<your-api-secret>');
  process.exit(1);
}

cloudinary.config({
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log(`📤 Uploading images to Cloudinary (${process.env.VITE_CLOUDINARY_CLOUD_NAME})...`);

const uploadFile = async (filePath) => {
  const relativePath = path.relative(publicDir, filePath).replace(/\\/g, '/');
  const result = await cloudinary.uploader.upload(filePath, {
    public_id: relativePath
      .replace(/\.[^.]+$/, "")
      .split("/")
      .map((part) => part.trim())
      .join("/"),
    overwrite: true,
    resource_type: "image",
  });
  console.log(`${relativePath} -> ${result.secure_url}`);
};

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
      continue;
    }
    if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.avif'].includes(ext)) {
        try {
          await uploadFile(fullPath);
        } catch (err) {
          console.error(`❌ Failed: ${path.relative(publicDir, fullPath)}`);
          console.error(err.message || JSON.stringify(err));
        }
      }
    }
  }
};

await walk(publicDir);
