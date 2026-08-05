import sharp from "sharp";

const files = [
  "public/media/results/lips-5.png",
  "public/media/results/botox-1.png",
  "public/media/results/skin-2.png",
];

for (const file of files) {
  const image = sharp(file);
  const { width, height } = await image.metadata();
  const { data, info } = await image
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const channels = info.channels;
  const lum = (x, y) => {
    const idx = (y * width + x) * channels;
    return (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
  };

  const columnMean = [];
  for (let x = 0; x < width; x += 1) {
    let sum = 0;
    for (let y = 0; y < height; y += 1) sum += lum(x, y);
    columnMean.push(sum / height);
  }

  const gradient = [];
  for (let x = 1; x < width; x += 1) {
    gradient.push({ x, d: Math.abs(columnMean[x] - columnMean[x - 1]) });
  }

  const center = width / 2;
  const near = gradient.filter((g) => Math.abs(g.x - center) < width * 0.15);
  near.sort((a, b) => b.d - a.d);

  const rowMean = [];
  for (let y = 0; y < height; y += 1) {
    let sum = 0;
    for (let x = 0; x < width; x += 1) sum += lum(x, y);
    rowMean.push(sum / width);
  }

  const rowGradient = [];
  for (let y = 1; y < height; y += 1) {
    rowGradient.push({ y, d: Math.abs(rowMean[y] - rowMean[y - 1]) });
  }

  console.log(`\n=== ${file} (${width}x${height}) ===`);
  console.log(
    "column means near center:",
    columnMean
      .map((m, x) => ({ m, x }))
      .filter((c) => Math.abs(c.x - center) < 25)
      .map((c) => `${c.x}:${Math.round(c.m)}`)
      .join(" ")
  );
  console.log(
    "top edge jumps:",
    rowGradient
      .filter((g) => g.y < 140 && g.d > 4)
      .map((g) => `${g.y}:${g.d.toFixed(1)}`)
      .join(" ")
  );
  console.log(
    "bottom edge jumps:",
    rowGradient
      .filter((g) => g.y > height - 140 && g.d > 4)
      .map((g) => `${g.y}:${g.d.toFixed(1)}`)
      .join(" ")
  );
}
