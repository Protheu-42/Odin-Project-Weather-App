# webpack-prettier-eslint-template

Template repository webpack, prettier and eslint already configured

- Create dist folder on root
- Prettier is configured to auto-format every times the documents save. (Inside .vscode folder)
- If you run "npx webpack --watch" you will not have to rerun webpack every time you make a change

# COMMANDS TO USE

npm init // create a new json if needed
npm install webpack webpack-cli --save-dev
npm install --save-dev style-loader css-loader
npm init @eslint/config@latest

# NOTES OF PRODUCTION

// async function printer(API, city) {
// const weatherAPI = await API("celcius", city);
// console.log(`Your address is ${weatherAPI.address}`);
// console.log(`The description is ${weatherAPI.description}`);
// console.log(`The temperature is ${weatherAPI.temperature}`);
// }

// printer(weatherAPIHandler, "Rio de Janeiro")

<!-- <div class="forecast">
        <div>00°</div>
        <div>Address</div>
        <div>temp max</div>
        <div>temp min</div>
      </div>
      <div class="search">
        <form>
          <input type="text" placeholder="Type your city" />
          <button type="button">Search</button>
          <div>
            <input type="radio" name="unitGroup" id="celcius" value="celcius" />
            <label for="celcius">Celcius (C°)</label>
          </div>
          <br />
          <div>
            <input
              type="radio"
              name="unitGroup"
              id="fahrenheit"
              value="fahrenheit"
            />
            <label for="fahrenheit">Fahrenheit (F°)</label>
          </div>
        </form>
      </div> -->
