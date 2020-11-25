module.exports = {
    roots: [
        '<rootDir>/src'
    ],
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    // The test environment that will be used for testing
    testEnvironment: "node",
    transform: {
        '.+\\.ts$': 'ts-jest'
    }
};
