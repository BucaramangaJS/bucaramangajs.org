const env = process.env.NODE_ENV || 'development';
const dev = process.env.NODE_ENV !== 'production' || !!process.env.HEROKU;

const settings = {
  env,
  dev,
  host: '0.0.0.0',
  port: process.env.PORT || 14500,
};

module.exports = settings;
