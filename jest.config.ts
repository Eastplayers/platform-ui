import type { Config } from "jest";

const config: Config = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  testEnvironment: "jsdom",
  coverageThreshold: {
    global: {
      branches: 65,
      functions: 70,
      lines: 75,
      statements: 75,
    },
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "((\\.| /)(stories|story|mock))\\.[jt]sx?$",
    "<rootDir>/src/index.tsx",
    "<rootDir>/src/reportWebVitals.ts",
    "<rootDir>/src/apiMock",
    "<rootDir>/src/config/",
    "<rootDir>/src/cache/",
  ],
  preset: "ts-jest",
  transform: {
    "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
  moduleNameMapper: {
    "\\.(scss|css|less)$": "<rootDir>/test/jest/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/jest/__mocks__/fileMock.js",
  },
};

export default config;
