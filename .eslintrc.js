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
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
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
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
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
            ],
        }],
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'no-undef': 'off',
        'no-underscore-dangle': ['error', {
            allow: ['__IS_DEV__'],
        }],
        'react/function-component-definition': 'off',
        'react/require-default-props': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
    },
    overrides: [
        {
            files: ['*.d.ts'],
            rules: {
                'no-underscore-dangle': 'off',
            },
        },
    ],
};
