// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // tab缩进
    'indent': [
      'error',
      'tab'
    ],
    // 单引号引用字符串
    'quotes': [
      'error',
      'single'
    ],
    // 必须使用分号结束
    'semi': [
      'error',
      'always'
    ],
    // 允许tab缩进
    'no-tabs': 'off',
    // 关闭===检测
    'eqeqeq': 'off',
    // 允许多行空行
    'no-multiple-empty-lines': 'off',
    // 允许多余空格
    'no-trailing-spaces': 'off',
    // end of file last line
    'eol-last': 'off',
    // promise reject不需要error对象
    'prefer-promise-reject-errors': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
