module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [ 'standard', 'standard-react' ],
  // add your custom rules here
  rules: {
    'indent': 0,
    'space-in-parens': 0,
    'space-before-function-paren': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
