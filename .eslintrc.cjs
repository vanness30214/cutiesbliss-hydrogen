/**
 * @type {import("@types/eslint").Linter.BaseConfig}
 */
module.exports = {
  extends: [
    '@remix-run/eslint-config',
    'plugin:hydrogen/recommended',
    'plugin:hydrogen/typescript',
    'plugin:prettier/recommended', // 添加这行
    'prettier' // 确保这一行在最后
  ],
  plugins: ['prettier'], // 添加这行
  rules: {
    'prettier/prettier': 'error', // 添加这行
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'hydrogen/prefer-image-component': 'off',
    'no-useless-escape': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    'no-case-declarations': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
};
