module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: 'babel-eslint',
  rules: {
    strict: 0,
    'linebreak-style': 0,
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: '16.8.6',
    },
  },
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
};
