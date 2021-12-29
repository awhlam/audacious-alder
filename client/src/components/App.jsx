import React from 'react';
import Overview from './overview/Overview.jsx';
import Related from './related/Related.jsx';
import Reviews from './reviews/Reviews.jsx';
import Questions from './questions/Questions.jsx';

export const App = () => (
  <div>
    <h1>Audacious Alder Clothing</h1>
    <Overview />
    <Related />
    <Reviews />
    <Questions />
  </div>
)

export default App;