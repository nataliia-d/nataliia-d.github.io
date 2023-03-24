import { getWeather } from './weather.js';
import { galleryExpand } from './expand.js';
import { gallery } from './gallery.js';

function main() {

  getWeather();
  galleryExpand();
  gallery();
}

document.addEventListener('DOMContentLoaded', main);
