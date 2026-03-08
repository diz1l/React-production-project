import path from 'path';

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

function createConfig() {
    return {
        clearMocks: true,
        testEnvironment: 'jsdom',
        coveragePathIgnorePatterns: [
            '\\\\node_modules\\\\',
        ],
        moduleFileExtensions: [
            'js',
            'jsx',
            'ts',
            'tsx',
            'json',
            'node',
        ],
        moduleDirectories: [
            'node_modules',
            '<rootDir>/src',
        ],
        testMatch: [
            '<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)',
        ],
        setupFilesAfterEnv: ['<rootDir>/config/jest/setupTest.ts'],
        rootDir: path.resolve(__dirname, '../../'),
        transform: {
            '^.+\\.(ts|tsx)$': 'ts-jest',
        },
        moduleNameMapper: {
            '\\.s?css$': 'identity-obj-proxy',
            '^(app|pages|widgets|shared|entities|features)/(.*)$': '<rootDir>/src/$1/$2',
            '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
        },
        globals: {
            __IS_DEV__: true,
        },
        // ...rest of the commented options...
    };
}

export default createConfig();
