const express = require('express');
const nasaImages = require('./images');
const app = express();

app.set('port', process.env.PORT || 3001);

app.locals.title = 'Nasa Images Api';
app.locals.images = [...nasaImages];

app.get('/api/v1/images', (request, response) => {
  const images = app.locals.images;

  return response.status(200).json({images});
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});
