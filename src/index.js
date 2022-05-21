import './style.css';
import weatherCaller from './weather-caller';
import displayController from './display-controller';

let currentWeather;
let currentFull;

async function newLocation(location, units) {
  currentWeather = await weatherCaller.fetchWeather(location, units);
  currentFull = await weatherCaller.fetchOneCall(
    currentWeather.coord.lat,
    currentWeather.coord.lon,
    units,
  );
}
async function initialPage() {
  displayController.createPage();
  await newLocation('denver', 'imperial');
  displayController.addPageContent(currentWeather, currentFull);
}
async function newPage(location, units) {
  await newLocation(location, units);
  displayController.redrawPage(currentWeather, currentFull);
}

initialPage();

const search = document.querySelector('#search');
const searchSubmit = document.querySelector('#search-submit');
const unitToggle = document.querySelector('#unit');

searchSubmit.addEventListener('click', () => newPage(search.value, unitToggle.classList[2]));
search.addEventListener('keyup', (e) => {
  if (e.code === 'Enter') {
    newPage(search.value, unitToggle.classList[2]);
  }
});
unitToggle.addEventListener('click', () => newPage(currentWeather.name, unitToggle.classList[2]));
