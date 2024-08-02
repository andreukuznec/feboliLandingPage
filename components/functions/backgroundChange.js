/**
 * @params {string} color -  Background colour from Tailwind CSS
 */
export function backgroundChange(bg, color1, color2 = "") {
  if (bg) {
    return color1;
  } else return color2;
}
