module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  reportUnusedDisableDirectives: true,
  rules: {},
  ignorePatterns: ["node_modules", "dist", "*.js"],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
};
