module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/tests/setup.ts", "jest-extended/all"],
  testMatch: ["**/tests/**/*.test.ts"],
  collectCoverageFrom: ["src/**/*.ts", "!src/**/tests/**/*.ts"],
  transform: {
    "^.+\\.(ts)$": "@swc/jest",
  },
};
