/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  // Prevent hanging in async tests https://stackoverflow.com/a/60905543
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  modulePathIgnorePatterns: ["/node_modules", "/dist"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  coveragePathIgnorePatterns: ["/node_modules/", "__test__"],
  setupFilesAfterEnv: ["@relmify/jest-fp-ts"],
};
