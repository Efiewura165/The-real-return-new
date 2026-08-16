const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const STOCK_DIR = path.join(__dirname, "..", "public", "images", "stock");
const MAX_DIMENSION = 2400;
const SIZE_THRESHOLD_BYTES = 1.5 * 1024 * 1024;

async function main() {
  const files = fs.readdirSync(STOCK_DIR).filter((f) => /\.(jpe?g|png)$/i.test(f));
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const filePath = path.join(STOCK_DIR, file);
    const before = fs.statSync(filePath).size;
    if (before < SIZE_THRESHOLD_BYTES) continue;

    const image = sharp(filePath);
    const metadata = await image.metadata();
    const needsResize = (metadata.width ?? 0) > MAX_DIMENSION || (metadata.height ?? 0) > MAX_DIMENSION;

    const buffer = await image
      .resize(needsResize ? { width: MAX_DIMENSION, height: MAX_DIMENSION, fit: "inside", withoutEnlargement: true } : undefined)
      .jpeg({ quality: 80, mozjpeg: true })
      .toBuffer();

    const tmpPath = `${filePath}.tmp`;
    fs.writeFileSync(tmpPath, buffer);
    fs.renameSync(tmpPath, filePath);
    const after = buffer.length;
    totalBefore += before;
    totalAfter += after;
    console.log(`${file}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB`);
  }

  console.log(`\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`);
}

main();
