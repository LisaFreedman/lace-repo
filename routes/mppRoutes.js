// const passport = require('passport');
// const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.get('/mpp/:name', (req, res) => {
    const { name } = req.params;
    console.log(name);
  });
};
