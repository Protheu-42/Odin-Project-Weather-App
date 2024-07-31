export function renderPage() {
  const content = document.querySelector(".content");
  // clearing any leftover content
  while (content.firstChild) {
    content.removeChild.firstChild;
  }

  // FORECAST
  const forecast = document.createElement("div");
  forecast.classList.add("forecast");
  const temp = document.createElement("div");
  temp.textContent = "00°";
  const address = document.createElement("div");
  address.textContent = "Address";
  const tempMax = document.createElement("div");
  tempMax.textContent = "Temperature MAX";
  const tempMin = document.createElement("div");
  tempMin.textContent = "Temperature MIN";

  // SEARCH BAR
  const searchInputs = document.createElement("div");
  searchInputs.classList.add("search");
  const form = document.createElement("form");
  const searchBox = document.createElement("input");
  searchBox.setAttribute("type", "text");
  searchBox.setAttribute("placeholder", "Type your city");
  const searchButton = document.createElement("button");
  searchButton.setAttribute("type", "button");
  searchButton.textContent = "Search";

  // RADIO BUTTONS
  // celcius
  const celciusDiv = document.createElement("div");
  const celciusRadioBtn = document.createElement("input");
  celciusRadioBtn.setAttribute("type", "radio");
  celciusRadioBtn.setAttribute("name", "unitGroup");
  celciusRadioBtn.setAttribute("id", "celcius");
  celciusRadioBtn.setAttribute("value", "celcius");
  const labelForCelcius = document.createElement("label");
  labelForCelcius.setAttribute("for", "celcius");
  labelForCelcius.textContent = "Celcius (C°)";

  const lineBreaker = document.createElement("br");

  // fahrenheit
  const fahrenheitDiv = document.createElement("div");
  const fahrenheitRadioBtn = document.createElement("input");
  fahrenheitRadioBtn.setAttribute("type", "radio");
  fahrenheitRadioBtn.setAttribute("namer", "unitGroup");
  fahrenheitRadioBtn.setAttribute("id", "celcius");
  fahrenheitRadioBtn.setAttribute("value", "celcius");
  const labelForFahrenheit = document.createElement("label");
  labelForFahrenheit.setAttribute("for", "fahrenheit");
  labelForFahrenheit.textContent = "Fahrenheit (F°)";

  // APPENDING
  content.appendChild(forecast);
  forecast.appendChild(temp);
  forecast.appendChild(address);
  forecast.appendChild(tempMax);
  forecast.appendChild(tempMin);

  content.appendChild(searchInputs);
  searchInputs.appendChild(form);
  form.appendChild(searchBox);
  form.appendChild(searchButton);
  form.appendChild(celciusDiv);
  celciusDiv.appendChild(celciusRadioBtn);
  celciusDiv.appendChild(labelForCelcius);
  form.appendChild(lineBreaker);
  form.appendChild(fahrenheitDiv);
  fahrenheitDiv.appendChild(fahrenheitRadioBtn);
  fahrenheitDiv.appendChild(labelForFahrenheit);
}
