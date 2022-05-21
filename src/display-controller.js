const displayController = (() => {
  const searchBar = () => {
    const searchField = document.createElement('div');
    searchField.id = 'search-field';

    const search = document.createElement('input');
    search.type = 'search';
    search.name = 'search';
    search.id = 'search';
    search.placeholder = 'Denver, US';

    const submit = document.createElement('div');
    submit.id = 'search-submit';
    submit.textContent = 'SUBMIT';

    searchField.appendChild(search);
    searchField.appendChild(submit);
    return searchField;
  };
  const unitToggleBtn = () => {
    const unitToggle = document.createElement('div');
    unitToggle.id = 'unit';
    unitToggle.classList.add('F');
    unitToggle.classList.add('mph');
    unitToggle.classList.add('imperial');
    unitToggle.addEventListener('click', () => {
      unitToggle.classList.toggle('F');
      unitToggle.classList.toggle('mph');
      unitToggle.classList.toggle('imperial');
      unitToggle.classList.toggle('C');
      unitToggle.classList.toggle('m/s');
      unitToggle.classList.toggle('metric');
    });
    return unitToggle;
  };
  const quickInfoBar = (weather, icon, weatherDescr, location, temp, min, max, date) => {
    const unit = document.querySelector('#unit').classList[0];

    const infoBar = document.createElement('div');
    infoBar.id = 'info';
    infoBar.classList.add(weather);
    const weatherSymbol = document.createElement('img');
    weatherSymbol.classList.add('weather-symbol');
    weatherSymbol.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherSymbol.alt = weatherDescr;
    const description = document.createElement('div');
    description.classList.add('weather-description');
    description.textContent = weatherDescr;
    const name = document.createElement('h2');
    name.classList.add('location-name');
    name.textContent = location;
    const temperature = document.createElement('div');
    temperature.classList.add('current-temperature');
    temperature.textContent = `${temp} °${unit}`;
    const minTemp = document.createElement('div');
    minTemp.classList.add('min-temp');
    minTemp.textContent = `Low:  ${min} °${unit}`;
    const maxTemp = document.createElement('div');
    maxTemp.classList.add('max-temp');
    maxTemp.textContent = `High: ${max} °${unit}`;
    const day = document.createElement('div');
    day.classList.add('time');
    day.textContent = date;

    const tempExtrema = document.createElement('div');
    tempExtrema.classList.add('extrema-temperature');
    tempExtrema.appendChild(maxTemp);
    tempExtrema.appendChild(minTemp);

    infoBar.appendChild(weatherSymbol);
    infoBar.appendChild(description);
    infoBar.appendChild(temperature);
    infoBar.appendChild(name);
    infoBar.appendChild(tempExtrema);
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
    const offset = new Date().getTimezoneOffset() * 60;
    let time = new Date((current.dt + offset + current.timezone) * 1000);
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let timeAbrv;
    if (hours > 12) {
      timeAbrv = 'PM';
      hours %= 12;
    } else {
      timeAbrv = 'AM';
    }
    if (hours === 0) {
      hours = 12;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    time = `${hours}:${minutes} ${timeAbrv}`;
    const info = quickInfoBar(
      current.weather[0].main,
      current.weather[0].icon,
      current.weather[0].description,
      `${current.name}, ${current.sys.country}`,
      current.main.temp,
      min,
      max,
      time,
    );
    return info;
  };
  const createAlert = (alert) => {
    const alertBanner = document.createElement('div');
    alertBanner.id = 'alert-banner';
    alertBanner.textContent = alert[0].event;
    return alertBanner;
  };
  const forecastCard = (time, weather, icon, weatherDescr, low, high) => {
    const unit = document.querySelector('#unit').classList[0];

    const card = document.createElement('div');
    card.classList.add('forecast-card', 'daily');
    const date = document.createElement('div');
    date.classList.add('day');
    const day = new Date(time * 1000).getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    date.textContent = days[day];
    const weatherSymbol = document.createElement('img');
    weatherSymbol.classList.add(weather, 'weather-symbol');
    weatherSymbol.src = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    weatherSymbol.alt = weatherDescr;
    const weatherDescription = document.createElement('div');
    weatherDescription.classList.add('weather-description');
    weatherDescription.textContent = weatherDescr;

    const tempHigh = document.createElement('div');
    tempHigh.classList.add('max-temp');
    const tempHighLabel = document.createElement('div');
    tempHighLabel.classList.add('label');
    tempHighLabel.textContent = 'High:';
    const tempHighValue = document.createElement('div');
    tempHighValue.classList.add('value');
    tempHighValue.textContent = `${high} °${unit}`;
    tempHigh.appendChild(tempHighLabel);
    tempHigh.appendChild(tempHighValue);

    const tempLow = document.createElement('div');
    tempLow.classList.add('min-temp');
    const tempLowLabel = document.createElement('div');
    tempLowLabel.classList.add('label');
    tempLowLabel.textContent = 'Low:';
    const tempLowValue = document.createElement('div');
    tempLowValue.classList.add('value');
    tempLowValue.textContent = `${low} °${unit}`;
    tempLow.appendChild(tempLowLabel);
    tempLow.appendChild(tempLowValue);

    card.appendChild(date);
    card.appendChild(weatherSymbol);
    card.appendChild(weatherDescription);
    card.appendChild(tempHigh);
    card.appendChild(tempLow);
    return card;
  };
  const sevenDayForecast = (week) => {
    const forecast = document.createElement('div');
    forecast.id = 'daily-forecast';
    for (let i = 1; i < 8; i += 1) {
      const dayCard = forecastCard(
        week[i].dt,
        week[i].weather[0].main,
        week[i].weather[0].icon,
        week[i].weather[0].description,
        week[i].temp.min,
        week[i].temp.max,
      );
      forecast.appendChild(dayCard);
    }
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
    time.classList.add('time');
    let curDate = new Date(hour.dt * 1000).getHours();
    let timeAbrv;
    if (curDate > 12) {
      timeAbrv = 'PM';
      curDate %= 12;
    } else {
      timeAbrv = 'AM';
    }
    if (curDate === 0) {
      curDate = 12;
    }
    if (curDate < 10) {
      curDate = `0${curDate}`;
    }
    time.textContent = `${curDate}:00 ${timeAbrv}`;

    const weather = document.createElement('img');
    weather.classList.add(hour.weather[0].main, 'weather-symbol');
    weather.src = `https://openweathermap.org/img/wn/${hour.weather[0].icon}@4x.png`;
    weather.alt = hour.weather[0].description;

    const weatherDescription = document.createElement('div');
    weatherDescription.classList.add('weather-description');
    weatherDescription.textContent = hour.weather[0].description;

    const temp = document.createElement('div');
    temp.classList.add('temperature');
    temp.textContent = `${hour.temp} °${unit.classList[0]}`;

    const humidity = document.createElement('div');
    humidity.classList.add('humidity');
    const humidityLabel = document.createElement('div');
    humidityLabel.classList.add('label');
    humidityLabel.textContent = 'Humidity:';
    const humidityValue = document.createElement('div');
    humidityValue.classList.add('value');
    humidityValue.textContent = `${hour.humidity}%`;
    humidity.appendChild(humidityLabel);
    humidity.appendChild(humidityValue);

    const wind = document.createElement('div');
    wind.classList.add('wind');
    const windLabel = document.createElement('div');
    windLabel.classList.add('label');
    windLabel.textContent = 'Wind:';
    const windValue = document.createElement('div');
    windValue.classList.add('value');
    windValue.textContent = `${hour.wind_speed}${unit.classList[1]} ${windDegreesConvert(hour.wind_deg)}`;
    wind.appendChild(windLabel);
    wind.appendChild(windValue);

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
    forecast.id = 'hourly-forecast';
    for (let i = 0; i < 9; i += 1) {
      const hour = hourlyForecastCard(today[i]);
      forecast.appendChild(hour);
    }
    return forecast;
  };
  const addPageContent = (weatherForecast, oneCallForecast) => {
    const body = document.querySelector('body');
    const info = createInfoHeader(
      weatherForecast,
      oneCallForecast.daily[0].temp.min,
      oneCallForecast.daily[0].temp.max,
    );
    body.appendChild(info);

    if (oneCallForecast.alerts) {
      const alert = createAlert(oneCallForecast.alerts);
      body.appendChild(alert);
    }

    const hourly = todayHourlyForecast(oneCallForecast.hourly);
    const daily = sevenDayForecast(oneCallForecast.daily);
    body.appendChild(hourly);
    body.appendChild(daily);
  };
  const createPage = () => {
    const body = document.querySelector('body');
    const header = createTopHeader();
    body.appendChild(header);
  };
  const deleteOldContent = () => {
    const body = document.querySelector('body');
    const info = document.querySelector('#info');
    const alert = document.querySelector('#alert-banner');
    const hourly = document.querySelector('#hourly-forecast');
    const daily = document.querySelector('#daily-forecast');
    body.removeChild(info);
    if (alert) {
      body.removeChild(alert);
    }
    body.removeChild(hourly);
    body.removeChild(daily);
  };
  const redrawPage = (weatherForecast, oneCallForecast) => {
    deleteOldContent();
    addPageContent(weatherForecast, oneCallForecast);
  };

  return { createPage, addPageContent, redrawPage };
})();

export default displayController;
