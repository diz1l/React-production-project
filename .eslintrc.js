module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    ignorePatterns: [
        'build/**',
        'node_modules/**',
    ],
    globals: {
        __IS_DEV__: 'readonly',
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:storybook/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src'],
                    ['app', './src/app'],
                    ['shared', './src/shared'],
                    ['entities', './src/entities'],
                    ['features', './src/features'],
                    ['widgets', './src/widgets'],
                    ['pages', './src/pages'],
                ],
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            },
        },
    },
    rules: {
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        indent: 'off',
        'lines-between-class-members': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: [
                'webpack.config.ts',
                'config/**/*.ts',
                '**/*.test.{js,jsx,ts,tsx}',
                '**/*.spec.{js,jsx,ts,tsx}',
                '**/*.stories.{js,jsx,ts,tsx}',
                '**/tests/**/*.{js,jsx,ts,tsx}',
            ],
        }],
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'no-undef': 'off',
        'no-underscore-dangle': ['error', {
            allow: ['__IS_DEV__', '__dirname', '__filename'],
        }],
        'react/function-component-definition': 'off',
        'react/require-default-props': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/button-has-type': 'off',
        'no-trailing-spaces': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'max-len': ['error', { ignoreComments: true, code: 120 }],
        'arrow-body-style': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    },
    overrides: [
        {
            files: ['*.d.ts'],
            rules: {
                'no-underscore-dangle': 'off',
            },
        },
        {
            files: ['config/**/*.ts', 'webpack.config.ts', 'jest.config.ts'],
            rules: {
                'func-names': 'off',
                'import/no-extraneous-dependencies': 'off',
            },
        },
        {
            files: ['config/storybook/*.js', 'config/storybook/**/*.js'],
            rules: {
                'no-underscore-dangle': 'off',
                'linebreak-style': 'off',
                'import/no-extraneous-dependencies': 'off',
            },
        },
    ],
};
