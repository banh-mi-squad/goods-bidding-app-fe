module.exports = {
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'airbnb/hooks',
    'plugin:storybook/recommended',
  ],
  plugins: ['prettier', 'import'],
  rules: {
    'prettier/prettier': ['error'],
    'func-names': ['error', 'as-needed'],
    'import/no-unresolved': 'error',
    // turn on errors for missing imports
    'react/jsx-filename-extension': [
      0,
      {
        extensions: ['.tsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': [
      0,
      {
        html: 'ignore',
        custom: 'ignore',
        explicitSpread: 'ignore',
      },
    ],
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 2,
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': 1,
    curly: ['error', 'all'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
};
