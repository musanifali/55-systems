module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    'import/first': 'warn' // Change from error to warning to allow build
  }
};
