// see http://eslint.org/docs/user-guide/configuring.html#configuring-rules
const OFF = 0;
const WARNING = 1; // eslint-disable-line no-unused-vars
const ERROR = 2;

module.exports = {
  'plugins': ['react', 'import'],
  // Extend AirBnB style guide - https://github.com/airbnb/javascript
  'extends': 'eslint-config-airbnb',
  'env': {
    'browser': false,
  },
  // on top of the AirBnB guide...
  'rules': {
    'no-use-before-define': [ERROR, 'nofunc'],
    'no-console': ERROR,
    'no-loop-func': OFF,
    'no-underscore-dangle': OFF,
    'indent': [ERROR, 2, {'SwitchCase': 1}],
    'quotes': [ERROR, 'single', {'avoidEscape': true, 'allowTemplateLiterals': true}],
    'no-nested-ternary': OFF,
    'padded-blocks': OFF,
    'space-infix-ops': OFF,
    'object-curly-spacing': [ERROR, 'never'],
    'array-bracket-spacing': [ERROR, 'never'],
    'computed-property-spacing': [ERROR, 'never'],
    'space-in-brackets': OFF,
    'space-before-function-paren': [ERROR, {'anonymous': 'never', 'named': 'never'}],
    'quote-props': OFF, // prefer but allow consistency
    'no-unneeded-ternary': [ERROR, {'defaultAssignment': true}],
    'max-len': OFF,
    'no-restricted-syntax': [
      ERROR,
      'BreakStatement',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    // react rules - https://github.com/yannickcr/eslint-plugin-react
    'react/no-multi-comp': [ERROR, {'ignoreStateless': true}],
    'react/jsx-max-props-per-line': OFF,
    'react/jsx-no-duplicate-props': ERROR,
    'react/jsx-pascal-case': ERROR,
    'react/no-direct-mutation-state': ERROR,
    'react/jsx-key': ERROR,
    'react/prop-types': ERROR,
    'react/jsx-indent': [ERROR, 2],
    'react/jsx-indent-props': [ERROR, 2],
    'react/jsx-boolean-value': [ERROR, 'always'],
    'react/jsx-closing-bracket-location': [ERROR, 'tag-aligned'],
    // TODO: rules which aren't quite working right...
    'react/display-name': [OFF, {'ignoreTranspilerName': false}], // captures any function returning jsx
    // TODO: rules to roll in over time...
    'comma-dangle': [OFF, 'always-multiline'],
    'react/jsx-handler-names': OFF,
    'react/forbid-prop-types': OFF,
    'react/jsx-no-bind': OFF,
    'react/no-string-refs': OFF,
    'react/prefer-stateless-function': OFF,
  }
};
