import { getCirclesModule } from './circles.js';
import { cacheDOM } from './cacheDom.js';

const setColorNames = async () => {
  const { colorName } = cacheDOM();
  const { getHexValueOfPickedColor } = getCirclesModule();
  const hexValue = getHexValueOfPickedColor();
  colorName.textContent = await _fetchName(hexValue);
};

const _fetchName = async (hexValue) => {
  const url = `https://www.thecolorapi.com/id?hex=${hexValue}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.name.value;
};

export { setColorNames };
