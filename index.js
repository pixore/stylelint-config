module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  plugins: [
    'stylelint-declaration-use-variable'
  ],
  rules: {
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/dollar-variable-colon-space-after': 'always',
    'sh-waqar/declaration-use-variable': ['/color/', 'z-index', 'font-size', 'background'],
    'no-extra-semicolons': true,
    'no-duplicate-selectors': true,
    'declaration-block-no-duplicate-properties': true,
    'unit-case': 'lower',
    'max-nesting-depth': 2,
    'unit-no-unknown': true
  }
}