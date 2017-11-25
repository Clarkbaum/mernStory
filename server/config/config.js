const settings = {};

settings.default = {
  port: 8000,
  database: { uri: 'mongodb://localhost/mern-story' },
};

module.exports = Object.assign({}, settings.default);

