const displayController = (() => {
  const searchBar = () => {
    const search = document.createElement('input');
    search.type = 'search';
    search.name = 'search';
    search.id = 'search';
    search.placeholder = 'Denver, US';
    return search;
  };
  const unitToggleBtn = () => {
    const unitToggle = document.createElement('div');
    unitToggle.id = 'unit';
    unitToggle.classList.add('F');
    unitToggle.classList.add('mph');
    unitToggle.addEventListener('click', () => {
      unitToggle.classList.toggle('F');
      unitToggle.classList.toggle('mph');
      unitToggle.classList.toggle('C');
      unitToggle.classList.toggle('m/s');
    });
    return unitToggle;
  };
  const quickInfoBar = (weather, weatherDescr, location, temp, min, max, date) => {
    const unit = document.querySelector('#unit').classList[0];

    const infoBar = document.createElement('div');
    infoBar.id = 'info';
    const weatherSymbol = document.createElement('div');
    weatherSymbol.classList.add(weather, 'weather-symbol');
    const description = document.createElement('div');
    description.textContent = weatherDescr;
    const name = document.createElement('h2');
    name.textContent = location;
    const temperature = document.createElement('div');
    temperature.textContent = `${temp} °${unit}`;
    const minTemp = document.createElement('div');
    minTemp.textContent = `${min} °${unit}`;
    const maxTemp = document.createElement('div');
    maxTemp.textContent = `${max} °${unit}`;
    const day = document.createElement('div');
    day.textContent = date;

    infoBar.appendChild(weatherSymbol);
    infoBar.appendChild(description);
    infoBar.appendChild(name);
    infoBar.appendChild(temperature);
    infoBar.appendChild(minTemp);
    infoBar.appendChild(maxTemp);
    infoBar.appendChild(day);
    return infoBar;
  };
  const createTopHeader = () => {
    const header = document.createElement('div');
    header.id = 'header';
    const logo = document.createElement('h1');
    logo.textContent = 'Weather App';
    const search = searchBar();
    const unitToggle = unitToggleBtn();

    header.appendChild(logo);
    header.appendChild(search);
    header.appendChild(unitToggle);
    return header;
  };
  const createInfoHeader = (current, min, max) => {
    const header = document.querySelector('#header');

    const offset = new Date().getTimezoneOffset();
    const time = new Date((current.dt + offset + current.timezone) * 1000);
    const info = quickInfoBar(
      current.weather[0].main,
      current.weather[0].description,
      current.name,
      current.main.temp,
      min,
      max,
      time,
    );

    header.appendChild(info);
  };
  const createAlert = (alert) => {
    const alertBanner = document.createElement('div');
    alertBanner.id = 'alert-banner';
    alertBanner.textContent = alert[0].event;
    return alertBanner;
  };
  const forecastCard = (time, weather, low, high) => {
    const unit = document.querySelector('#unit').classList[0];

    const card = document.createElement('div');
    card.classList.add('forecast-card', 'daily');
    const date = document.createElement('div');
    date.classList.add('day');
    const day = new Date(time).getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    date.textContent = days[day];
    const weatherSymbol = document.createElement('div');
    weatherSymbol.classList.add(weather, 'weather-symbol');
    const tempHigh = document.createElement('div');
    tempHigh.textContent = `${high} °${unit}`;
    const tempLow = document.createElement('div');
    tempLow.textContent = `${low} °${unit}`;

    card.appendChild(date);
    card.appendChild(weatherSymbol);
    card.appendChild(tempHigh);
    card.appendChild(tempLow);
    return card;
  };
  const sevenDayForecast = (week) => {
    const forecast = document.createElement('div');
    forecast.classList.add('daily-forecast');
    const day1Card = forecastCard(
      week[1].dt,
      week[1].weather[0].main,
      week[1].temp.min,
      week[1].temp.max,
    );
    const day2Card = forecastCard(
      week[2].dt,
      week[2].weather[0].main,
      week[2].temp.min,
      week[2].temp.max,
    );
    const day3Card = forecastCard(
      week[3].dt,
      week[3].weather[0].main,
      week[3].temp.min,
      week[3].temp.max,
    );
    const day4Card = forecastCard(
      week[4].dt,
      week[4].weather[0].main,
      week[4].temp.min,
      week[4].temp.max,
    );
    const day5Card = forecastCard(
      week[5].dt,
      week[5].weather[0].main,
      week[5].temp.min,
      week[5].temp.max,
    );
    const day6Card = forecastCard(
      week[6].dt,
      week[6].weather[0].main,
      week[6].temp.min,
      week[6].temp.max,
    );
    const day7Card = forecastCard(
      week[7].dt,
      week[7].weather[0].main,
      week[7].temp.min,
      week[7].temp.max,
    );
    forecast.appendChild(day1Card);
    forecast.appendChild(day2Card);
    forecast.appendChild(day3Card);
    forecast.appendChild(day4Card);
    forecast.appendChild(day5Card);
    forecast.appendChild(day6Card);
    forecast.appendChild(day7Card);
    return forecast;
  };
  const windDegreesConvert = (degrees) => {
    let string;
    if (degrees > 348.75 || degrees <= 22.5) {
      string = 'N';
    } else if (degrees > 22.5 && degrees <= 67.5) {
      string = 'NE';
    } else if (degrees > 67.5 && degrees <= 112.5) {
      string = 'E';
    } else if (degrees > 112.5 && degrees <= 157.5) {
      string = 'SE';
    } else if (degrees > 157.5 && degrees <= 202.5) {
      string = 'S';
    } else if (degrees > 202.5 && degrees <= 247.5) {
      string = 'SW';
    } else if (degrees > 247.5 && degrees <= 292.5) {
      string = 'W';
    } else {
      string = 'NW';
    }
    return string;
  };
  const hourlyForecastCard = (hour) => {
    const unit = document.querySelector('#unit');

    const card = document.createElement('div');
    card.classList.add('forecast-card', 'hourly');
    const time = document.createElement('div');
    const curDate = new Date(hour.dt * 1000).getHours();
    let timeAbrv;
    if (curDate > 12) {
      timeAbrv = 'AM';
    } else {
      timeAbrv = 'PM';
    }
    time.textContent = `${curDate % 12}:00 ${timeAbrv}`;
    const weather = document.createElement('div');
    weather.classList.add(hour.weather[0].main, 'weather-symbol');
    const weatherDescription = document.createElement('div');
    weatherDescription.textContent = hour.weather[0].description;
    const temp = document.createElement('div');
    temp.textContent = `${hour.temp} °${unit.classList[0]}`;
    const humidity = document.createElement('div');
    humidity.textContent = `${hour.humidity}%`;
    const wind = document.createElement('div');
    wind.textContent = `${hour.wind_speed}${unit.classList[1]} ${windDegreesConvert(hour.wind_deg)}`;

    card.appendChild(time);
    card.appendChild(weather);
    card.appendChild(weatherDescription);
    card.appendChild(temp);
    card.appendChild(humidity);
    card.appendChild(wind);
    return card;
  };
  const todayHourlyForecast = (today) => {
    const forecast = document.createElement('div');
    forecast.classList.add('hourly-forecast');
    const hour0 = hourlyForecastCard(today[0]);
    const hour1 = hourlyForecastCard(today[1]);
    const hour2 = hourlyForecastCard(today[2]);
    const hour3 = hourlyForecastCard(today[3]);
    const hour4 = hourlyForecastCard(today[4]);
    const hour5 = hourlyForecastCard(today[5]);

    forecast.appendChild(hour0);
    forecast.appendChild(hour1);
    forecast.appendChild(hour2);
    forecast.appendChild(hour3);
    forecast.appendChild(hour4);
    forecast.appendChild(hour5);
    return forecast;
  };
  const createPage = (weatherForecast, oneCallForecast) => {
    const body = document.querySelector('body');
    const header = createTopHeader();
    body.appendChild(header);

    createInfoHeader(
      weatherForecast,
      oneCallForecast.daily[0].temp.min,
      oneCallForecast.daily[0].temp.max,
    );

    if (oneCallForecast.alerts) {
      const alert = createAlert(oneCallForecast.alerts);
      body.appendChild(alert);
    }

    const hourly = todayHourlyForecast(oneCallForecast.hourly);
    const daily = sevenDayForecast(oneCallForecast.daily);
    body.appendChild(hourly);
    body.appendChild(daily);
  };

  return { createPage };
})();

export default displayController;
