//
// Canvas to ASCII
// Author: Lupo Montero (https://github.com/lupomontero)
//
// Based on code by Andrei Gheorghe (http://github.com/idevelop) and Jacob
// Seidelin (http://www.nihilogic.dk/labs/jsascii/)
//


const bound = (value, interval) => Math.max(
  interval[0],
  Math.min(interval[1], value),
);


const getPixelAtOffset = (data, offset) => ({
  red: data[offset],
  green: data[offset + 1],
  blue: data[offset + 2],
  alpha: data[offset + 3],
});


//
// Increase the contrast of the image so that the ASCII representation looks
// better.
//
// See: http://www.dfstudios.co.uk/articles/image-processing-algorithms-part-5/
//
const getContrastedColor = (pixel, contrast) => {
  // calculate contrast factor
  // http://www.dfstudios.co.uk/articles/image-processing-algorithms-part-5/
  const contrastFactor = (259 * (contrast + 255)) / (255 * (259 - contrast));

  return {
    red: bound(Math.floor((pixel.red - 128) * contrastFactor) + 128, [0, 255]),
    green: bound(Math.floor((pixel.green - 128) * contrastFactor) + 128, [0, 255]),
    blue: bound(Math.floor((pixel.blue - 128) * contrastFactor) + 128, [0, 255]),
    pixel: pixel.alpha,
  };
};


//
// Compute pixel brightness
//
// See: http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color
//
const computePixelBrightness = pixel => (
  (0.299 * pixel.red + 0.587 * pixel.green + 0.114 * pixel.blue) / 255
);


const brightnessToChar = (brightness, chars = (' .,:;i1tfLCG08@').split('')) => (
  chars[(chars.length - 1) - Math.round(brightness * (chars.length - 1))]
);


const pixelToChar = (data, offset, contrast) => brightnessToChar(
  computePixelBrightness(
    getContrastedColor(
      getPixelAtOffset(data, offset),
      contrast,
    ),
  ),
);

const pixelToCharWithColor = (data, offset, contrast) => {
  const pixel = getPixelAtOffset(data, offset);
  const style = `color: rgba(${pixel.red}, ${pixel.green}, ${pixel.blue}, ${pixel.alpha})`;
  return `<span style="${style}">${brightnessToChar(
    computePixelBrightness(
      getContrastedColor(pixel, contrast),
    ),
  )}</span>`;
};


const fromData = (width, height, data, mode = 'plain') => {
  let chars = '';

  // every other row because letters are not square
  for (let y = 0; y < height; y += 2) {
    if (y > 0) {
      chars += '\n';
    }

    for (let x = 0; x < width; x += 1) {
      if (mode === 'html') {
        chars += pixelToCharWithColor(data, (y * width + x) * 4, 1);
      } else {
        chars += pixelToChar(data, (y * width + x) * 4, 1);
      }
    }
  }

  return chars;
};


const fromCanvas = (canvas, options = {}) => {
  const { width, height } = canvas;
  const { data } = canvas.getContext('2d').getImageData(0, 0, width, height);
  return fromData(width, height, data, options);
};


export default Promise.resolve({ fromData, fromCanvas });
