module.exports = {
  "plugins": ["react"],
  // Extend AirBnB style guide - https://github.com/airbnb/javascript
  "extends": "lystable/node_modules/eslint-config-airbnb",
  // on top of the AirBnB guide...
  "rules": {
    "no-use-before-define": [2, "nofunc"],
    "no-console": 2,
    "no-loop-func": 0,
    "indent": [2, 2, {"SwitchCase": 1}],
    "quotes": [2, "single", "avoid-escape"],
    "no-nested-ternary": 0,
    "padded-blocks": 0,
    "space-infix-ops": 0,
    "object-curly-spacing": [2, "never"],
    "array-bracket-spacing": [2, "never"],
    "computed-property-spacing": [2, "never"],
    "space-in-brackets": 0,
    "space-before-function-paren": [2, { "anonymous": "never", "named": "never" }],
    // react rules - https://github.com/yannickcr/eslint-plugin-react
    "react/no-multi-comp": [2, {"ignoreStateless": true}],
    "react/jsx-max-props-per-line": 0,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-pascal-case": 2,
    "react/no-direct-mutation-state": 2,
    "react/jsx-key": 2,
    "react/prop-types": 2,
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-boolean-value": [2, "always"],
    "react/jsx-closing-bracket-location": [2, "tag-aligned"],
    // TODO: rules which aren't quite working right...
    "react/display-name": [0, {"acceptTranspilerName": true}], // captures any function returning jsx
    // TODO: rules to roll in over time...
    "comma-dangle": [0, "always-multiline"],
    "react/jsx-handler-names": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-no-bind": 0,
    "react/no-string-refs": 0
  }
};
