module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
};
