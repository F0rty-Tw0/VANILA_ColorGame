const _colorToHex = (color) => {
  const hex = color.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
};

const _colorTextToColors = (colorText) => {
  const colorNumbers = colorText.replace(/[^0-9,.]/g, '');
  const colorsArray = colorNumbers.split(',');
  return colorsArray.map((color) => parseInt(color));
};

const rgbToHex = (colorText) => {
  const colorsArray = _colorTextToColors(colorText);
  const hexColors = colorsArray.map((color) => _colorToHex(color));
  return hexColors.join('');
};

export { rgbToHex };
