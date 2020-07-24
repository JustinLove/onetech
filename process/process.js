if (!process.env.ONETECH_FOOD_BONUS) {
  process.env.ONETECH_FOOD_BONUS = 0;
}

const MainProcessor = require('./src/MainProcessor');

console.log('dirname', __dirname)
const processor = new MainProcessor(__dirname);

processor.doDownload = process.argv.includes('download');
processor.doSprites = process.argv.includes('sprites');
processor.doSounds = process.argv.includes('sounds');

console.log("--- Processing static-edge ---");
const unprocessedVersion = processor.process(null);

if (unprocessedVersion) {
  processor.doDownload = false;
  console.log(`--- Processing static for v${unprocessedVersion.id} ---`);
  processor.process(unprocessedVersion);
}
