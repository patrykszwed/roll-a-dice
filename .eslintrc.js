module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'google', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'require-jsdoc': 'off',
    'arrow-parens': 'off',
    'linebreak-style': [0, 'error', 'windows'],
    'max-len': ['error', { comments: 120, code: 120 }],
    'max-lines-per-function': ['error', 100],
    'object-curly-spacing': 'off',
    'operator-linebreak': 'off',
    'react/prop-types': 0,
    indent: 'off'
  }
};
