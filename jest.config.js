module.exports = {
  preset: 'react-native',
  testPathIgnorePatterns: ['<rootDir>/.history'],
  setupFilesAfterEnv:['<rootDir>/__tests__/jestSetup.ts'],
  testMatch: ["**/*.spec.tsx","**/*.test.ts"],
};
