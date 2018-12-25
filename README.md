# React Website

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Serve it with a static server:

#### Install `serve` to dev
```
yarn global add serve
```

#### view it in the browser

```
serve -s build
```

#### To publish it at [gh-pages branch](https://davidkoojohn.github.io/react-website), run:

```
yarn add --dev gh-pages
```

Add the following script in your package.json.

```
// ...
"scripts": {
  // ...
  "predeploy": "yarn build",
  "deploy": "gh-pages -d build"
}
```

Then run:

```
yarn deploy
```

### License
MIT
