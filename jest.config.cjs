module.exports = {
  // Indicates that the environment is Node.js
  testEnvironment: 'node',

  // set jest to find the tests files
  testMatch: ['**/tests/**/*.test.js'],

  // clear automatically all the mocks between tests
  clearMocks: true,

  // show the log messages during the tests
  verbose: true,

  // garantee that the jest will understand the import messages
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};