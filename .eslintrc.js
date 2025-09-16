module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    'import/first': 'off',
    'no-unused-vars': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/img-redundant-alt': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react-hooks/exhaustive-deps': 'off'
  }
};
