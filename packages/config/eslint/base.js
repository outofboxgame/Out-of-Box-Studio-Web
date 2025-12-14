module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  env: { es2022: true, node: true, browser: true },
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  ignorePatterns: ['node_modules/', 'dist/', '.next/']
};

