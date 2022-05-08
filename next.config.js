const withInterceptStdout = require('next-intercept-stdout');
const { i18n } = require('./next-i18next.config');

module.exports = withInterceptStdout({
  i18n,
}, (text) => (text.includes('Duplicate atom key') ? '' : text));
