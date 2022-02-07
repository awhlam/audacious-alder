# Audacious Alder Clothing Store

Our outdated client-facing retail web-portal has become significantly outdated and has been proven to be hurting sales numbers. This project comprises a complete redesign of the retail portal frontend designed to address this concern and modernize the site.

## Table of Contents
1. [Features](#features)
2. [Getting Started](#setup)
3. [Tech Stack](#techStack)

## Features <a name="features"></a>
  <span><b>Overview</b> - Product information, photo thumbnails, size and quantity selection.</span>
    <img
      src="https://user-images.githubusercontent.com/32132177/152846866-ae59cc29-9823-4339-b816-8d2413201eae.gif"
      style="width: auto; max-width: 100%; height: auto"/>

  <span><b>Related</b> - Items associated with the current product and a comparison view.</span>
    <img
      src="https://user-images.githubusercontent.com/32132177/152847001-4c45af65-3428-4d04-a78f-3dc41797e6d4.gif"
      style="width: auto; max-width: 100%; height: auto"/>

  <span><b>Reviews</b> - User-submitted reviews which can be marked as helpful or reported.</span>
    <img
      src="https://user-images.githubusercontent.com/32132177/152846960-58bc5739-2666-47d2-8207-8ebccb2900e4.gif"
      style="width: auto; max-width: 100%; height: auto"/>

  <span><b>Questions</b> - User-submitted questions asked about the product and their correspondind answers.</span>
    <img
      src="https://user-images.githubusercontent.com/32132177/152846908-58ec3cfa-fc21-41b4-9f84-553a4deeabea.gif"
      style="width: auto; max-width: 100%; height: auto"/>

## Getting Started <a name="setup"></a>
1. Get your personal access token from [GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
2. Copy `configExample.js`, rename it to `config.js`, and enter your Github token.
3. Run `npm install` to install dependencies.
4. Run `npm run live-server` or `npm run forever` to start Node.
5. Run `npm run build` to start Webpack.

## Tech Stack <a name="techStack"></a>
* [React](https://reactjs.org/)
* [Axios](https://axios-http.com/)
* [Moment.js](https://momentjs.com/)
* [styled-components](https://styled-components.com/)
* [Webpack](https://webpack.js.org/) / [Babel](https://babeljs.io/)
* [Node.js](https://nodejs.org/en/) / [Express](https://expressjs.com/)
* [forever.js](https://github.com/foreversd/forever)
* [compression-webpack-plugin](https://github.com/webpack-contrib/compression-webpack-plugin) / [express-static-gzip](https://github.com/tkoenig89/express-static-gzip)
* [Jest](https://jestjs.io/) / [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
* [circleCI](https://circleci.com/)
