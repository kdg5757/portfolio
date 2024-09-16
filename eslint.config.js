import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:sonarjs/recommended',
    'prettier'
  ],
  ignorePatterns: [
    '*/**/*.d.ts',
    '**/*.css',
    '**/*.scss',
    '**/*.less',
    '**/*.yml',
    '**/*.yaml',
    '**/*.cjs',
    '**/*.lock'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort',
    'sonarjs',
    'react-hooks',
    'unused-imports'
  ],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "no-unused-vars": "off",
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        "args": 'all',
        "argsIgnorePattern": '^_$|props',
        "varsIgnorePattern": '^_$|^_'
      }
    ],
    'unused-imports/no-unused-imports': "error",
    "react/jsx-boolean-value": "warn",
    "react/jsx-curly-brace-presence": "error",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true
      }
    ],
    "react/prop-types": "off",
    "prefer-template": "warn",
    "arrow-body-style": [
      "warn",
      "as-needed"
    ],
    "react/jsx-pascal-case": "error",
    "jsx-quotes": [
      "warn",
      "prefer-double"
    ],
    "react/jsx-props-no-spreading": "off",
    "no-empty-pattern": "warn",
    '@typescript-eslint/consistent-type-definitions': [
      "warn",
      "type"
    ],
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks: '(useRecoilCallback|useRecoilTransaction_UNSTABLE)'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': "warn",
    '@typescript-eslint/no-empty-function': "off",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ['^react'],
          [
            '^antd',
            '^@ant-design/icons',
            "^@?\\w"
          ],
          ['~/(.*)'],
          ['./'],
          [
            './*.module.scss',
            './*.module.css',
            './*.module.less',
            './*.scss',
            './*.css',
            './*.less'
          ]
        ]
      }
    ],
    "no-useless-catch": "off",
    "curly": [
      "error",
      "all"
    ],
    "no-plusplus": ["error"]
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      alias: {
        map: {
          '~': './src/'
        }
      }
    }
  },
  overrides: [
    {
      "files": [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)',
        '*.stories.@(ts|tsx|js)'
      ],
      "extends": [
        "plugin:jest-dom/recommended",
        "plugin:testing-library/react"
      ]
    }
  ]
});
