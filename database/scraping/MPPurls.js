/* eslint-disable */
const cheerio = require('cheerio');
const axios = require('axios');
const MPPurl = require('../models/MPPurl');

const mppUrlRouter = router => {
  const resultsArray = [];
  router.get('/scrape', (req, res) => {
    axios.get('https://www.ola.org/en/members/current').then(response => {
      const $ = cheerio.load(response.data);
      $('td.views-field.views-field-field-full-name-by-last-name.is-active').each((i, element) => {
        const result = {};
        result.url = $(element)
          .find('a')
          .attr('href');
        result.url = `https://www.ola.org${result.url}`;
        resultsArray.push(`https://www.ola.org${result.url}`);

        MPPurl.create(result)
          .then(dbMPPurl => {
            console.log(dbMPPurl);
          })
          .catch(err => res.json(err));
      });
      // Send a "Scrape Complete" message to the browser
      res.send('Scrape Complete');
    });
  });
  return router;
};

module.exports = mppUrlRouter;
