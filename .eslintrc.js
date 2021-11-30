module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:@next/next/recommended', 'plugin:prettier/recommended', 'eslint:recommended', 'plugin:react/recommended', "next"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    // https://reactjs.org/docs/hooks-rules.html
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect
    'no-console': 'warn', // TODO: use 'error' when react-scripts supports it
    'prettier/prettier': [
      'error',
      {
        semi: true,
        trailingComma: 'none',
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'lf'
      }
    ]
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
