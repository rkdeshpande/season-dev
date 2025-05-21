const js = require('@eslint/js');
const react = require('eslint-plugin-react');
const ts = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');

module.exports = [
  js.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
      },
      globals: {
        console: true,
        setInterval: true,
        clearInterval: true,
        document: true,
        HTMLElement: true
      }
    },
    plugins: {
      react,
      '@typescript-eslint': ts
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      // Add custom rules here if needed
    }
  },
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
      },
      globals: {
        console: true,
        setInterval: true,
        clearInterval: true,
        document: true,
        HTMLElement: true
      }
    },
    plugins: {
      react
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    files: [
      '**/*.test.{js,jsx,ts,tsx}',
      'src/utils/seasonCalculator.ts',
      'src/__mocks__/*.ts'
    ],
    languageOptions: {
      globals: {
        jest: true,
        describe: true,
        it: true,
        expect: true,
        beforeEach: true,
        afterEach: true
      }
    }
  },
]; 