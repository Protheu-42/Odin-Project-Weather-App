export async function weatherAPIHandler(temperatureOutput = "celcius", city) {
  // city query example Rio%20de%20Janeiro
  let unitGroup = "";
  if (temperatureOutput === "celcius") {
    unitGroup = "metric";
  } else if (temperatureOutput === "fahrenheit") {
    unitGroup = "us";
  }
  const fetchWeather = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=${unitGroup}&key=HHMYQ7NPYJHMY9VP4ET9S5T69&contentType=json`,
    {
      method: "GET",
      headers: {},
    }
  );
  const weatherJson = await fetchWeather.json();
  const address = weatherJson.address;

  const todayForecast = weatherJson.days[0];
  const description = todayForecast.description;
  const temperature = todayForecast.temp;
  return {
    address,
    description,
    temperature,
  };
}
