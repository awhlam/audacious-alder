# Audacious Alder Clothing Store

Our outdated client-facing retail web-portal has become significantly outdated and has been proven to be hurting sales numbers. This project comprises a complete redesign of the retail portal frontend designed to address this concern and modernize the site.

## Table of Contents
1. [Features](#features)
2. [Getting Started](#setup)
3. [Tech Stack](#techStack)

## Features <a name="features"></a>
  <span><b>Overview</b> - Product information, photo thumbnails, size and quantity selection.</span>
    <img
      src="https://drive.google.com/uc?export=view&id=11nHFzbyEerHAef_boMr2PLzkGgEi5w2J"
      style="width: auto; max-width: 100%; height: auto"/>
  
  <span><b>Related</b> - Items associated with the current product and a comparison view.</span>
    <img
      src="https://drive.google.com/uc?export=view&id=1n832Fes6RazZZghwF2LYlOxzSypAdMym"
      style="width: auto; max-width: 100%; height: auto"/>

  <span><b>Reviews</b> - User-submitted reviews which can be marked as helpful or reported.</span>
    <img
      src="https://drive.google.com/uc?export=view&id=1fohNZh8OFFL5R4Sf0RpwIBo6JSi89myy"
      style="width: auto; max-width: 100%; height: auto"/>

  <span><b>Questions</b> - User-submitted questions asked about the product and their correspondind answers.</span>
    <img
      src="https://drive.google.com/uc?export=view&id=1gIedKksqghH9hGAoblcL9BHQpux42f71"
      style="width: auto; max-width: 100%; height: auto"/>

## Getting Started <a name="setup"></a>
1. Get your personal access token from [GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
2. Copy `configExample.js`, rename it to `config.js`, and enter your Github token.
3. Run `npm install` to install dependencies.
4. Run `npm run live-server` or `npm run forever` to start Node.
5. Run `npm run build` to start Webpack.

## Tech Stack <a name="techStack"></a>
* React
* Axios
* Moment.js
* Styled-Components
* Webpack / Babel
* Node / Express
* forever.js
* compression-webpack-plugin / express-static-gzip
* Jest / React Testing Library
* circleCI
