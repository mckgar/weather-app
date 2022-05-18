const weatherCaller = (() => {
  /* I am aware of this security risk with this key being viewable, however,
     it is a free key and this is a learning project, so the risk is minimal */
  const API_KEY = '704b0a8c629b869880bd52c5be419661';
  const fetchWeather = async (location, units) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${API_KEY}`);
    const weather = await response.json();
    return weather;
  };
  const fetchOneCall = async (lat, lon, units) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`);
    const weather = await response.json();
    return weather;
  };

  return { fetchWeather, fetchOneCall };
})();

export default weatherCaller;
