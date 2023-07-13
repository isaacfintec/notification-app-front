/* eslint-disable no-undef */
module.exports = {
  modulePaths: ['<rootDir>'],
  testPathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@redux/(.*)$': '<rootDir>/src/core/redux/$1',
    '^@redux$': '<rootDir>/src/core/redux/index'
  }
};
