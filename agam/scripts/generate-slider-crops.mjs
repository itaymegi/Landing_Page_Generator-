/**
 * Splits the side-by-side result photos into aligned before/after halves so the
 * comparison slider has two real frames per treatment. Crop windows are tuned by
 * hand against the burnt-in labels and the divider column of each source.
 *
 * Run: node scripts/generate-slider-crops.mjs
 */
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const OUT_DIR = "public/media/slider";

/**
 * Each source is split at `divider`, then both halves take the same window so
 * the two frames stay registered when the slider wipes between them.
 */
const sources = [
  {
    name: "lips",
    file: "public/media/results/lips-5.png",
    divider: 327,
    panelWidth: 324,
    top: 185,
    height: 405,
    beforeSide: "left",
  },
  {
    name: "botox",
    file: "public/media/results/botox-1.png",
    divider: 351,
    panelWidth: 348,
    top: 106,
    height: 435,
    beforeSide: "right",
  },
  {
    name: "anti-aging",
    file: "public/media/results/skin-2.png",
    divider: 278,
    panelWidth: 275,
    top: 72,
    height: 344,
    beforeSide: "left",
  },
];

/**
 * Nose was already shot as two frames, but the camera drifted between them, so
 * each frame gets its own window that puts the profile in the same place.
 */
const registeredPairs = [
  {
    name: "nose",
    width: 600,
    height: 750,
    frames: {
      before: {
        file: "public/media/results/nose-pair-before.jpg",
        left: 98,
        top: 113,
      },
      after: {
        file: "public/media/results/nose-pair-after.jpg",
        left: 23,
        top: 97,
      },
    },
  },
];

await mkdir(OUT_DIR, { recursive: true });

for (const source of sources) {
  const { width } = await sharp(source.file).metadata();

  const windows = {
    left: { left: Math.max(0, source.divider - source.panelWidth) },
    right: {
      left: Math.min(width - source.panelWidth, source.divider + 1),
    },
  };

  const beforeSide = source.beforeSide;
  const afterSide = beforeSide === "left" ? "right" : "left";

  for (const [state, side] of [
    ["before", beforeSide],
    ["after", afterSide],
  ]) {
    const out = `${OUT_DIR}/${source.name}-${state}.jpg`;
    await sharp(source.file)
      .extract({
        left: windows[side].left,
        top: source.top,
        width: source.panelWidth,
        height: source.height,
      })
      .jpeg({ quality: 92, chromaSubsampling: "4:4:4" })
      .toFile(out);
    console.log(
      `${out} <- ${source.file} [${side}] ${source.panelWidth}x${source.height} @ ${windows[side].left},${source.top}`
    );
  }
}

for (const pair of registeredPairs) {
  for (const [state, frame] of Object.entries(pair.frames)) {
    const out = `${OUT_DIR}/${pair.name}-${state}.jpg`;
    await sharp(frame.file)
      .extract({
        left: frame.left,
        top: frame.top,
        width: pair.width,
        height: pair.height,
      })
      .jpeg({ quality: 92, chromaSubsampling: "4:4:4" })
      .toFile(out);
    console.log(
      `${out} <- ${frame.file} ${pair.width}x${pair.height} @ ${frame.left},${frame.top}`
    );
  }
}
