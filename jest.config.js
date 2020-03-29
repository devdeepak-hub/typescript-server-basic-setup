// eslint no-use-before-define: 0
/* const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('./tsconfig.json');
*/
module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
  },

};

// eslint no-use-before-define: 2
// pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
