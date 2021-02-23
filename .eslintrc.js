module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'flowtype', '@babel'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-no-bind': 'off',
    'no-invalid-this': 'off',
    'consistent-return': 'off',
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    'no-nested-ternary': 'off',
    'react/no-typos': 'off',
    'react/require-default-props': 'off',
    'react/prefer-stateless-function': 'off',
    'import/prefer-default-export': 'off',
    'react/no-array-index-key': 'off',
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/extensions': 'off',
    'import/default': 'off',
    'react/destructuring-assignment': 'off',
    'import/no-cycle': 'off',
    'import/namespace': 'off',
    'import/no-absolute-path': 'error',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'prettier/prettier': ['error', {printWidth: 110, singleQuote: true}],
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['external', ['builtin', 'internal'], 'parent', 'sibling', 'index'],
      },
    ],
  },
};
