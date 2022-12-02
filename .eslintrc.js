module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-mixed-spaces-and-tabs': 'warn',
    'no-unused-vars': 'off',
    'no-constant-condition': 'off',    
    'vue/no-unused-components': 'warn',
    'vue/no-parsing-error': 'warn',
    'no-undef': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-mutating-props': 'off',
    'vue/require-prop-type-constructor': 'off'

  },
  parserOptions: {
    parser: '@babel/eslint-parser'
  }
}
