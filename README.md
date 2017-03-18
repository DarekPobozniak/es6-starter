# nespresso
Nespresso challenge

## Local Installation

Install [node.js](https://nodejs.org)

Open folder with project in terminal

Install dependencies

```sh
npm install
```

## Development

```sh
npm start
```

Automatically recompiles resources when files change and reloads the page in browser

Once run, open <http://localhost:8767/>

### Linting

```sh
npm run lint:js
```

Runs JS linting using ESLint

```sh
npm run lint:css
```

Runs CSS linting using Stylelint

```sh
npm run lint
```

Runs JS and CSS linting

### Testing

```sh
npm run test
```

Executes all unit tests

```sh
npm run test:watch
```

Runs unit tests continuously during development (watch tests)

## Production

```
npm run serve
```

Minifies javascript and CSS and opens the page in your browser
