Javascript Styleguide
=====================

We follow the excellent styleguide provided by
[Airbnb](https://github.com/airbnb/javascript).

Exceptions or extensions to the specifics discussed in that guide are
documented here or in project specific documentation.

### Eslint Config
Use the base [Kalo eslint config](https://www.npmjs.com/package/eslint-config-kalo) for your Javascript projects! Find details [here](eslint-config-kalo).

Function definition
-------------------
Extending the [Airbnb Function Rules](https://github.com/airbnb/javascript#functions)...

We should avoid over-using short-hand syntax where we lose clarity of the intended action. Functions should be named descriptively using [function declaration syntax](https://github.com/airbnb/javascript#7.1) as much as possible.

Ie. We should *only* be using the [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) when one of the following statements are true:

- The function *needs* to be bound to the parent context
- The function is following a very common pattern (eg. returning a thunk from an action)
- The function body contains a single top level expression which is returned (eg. `map(val => val + 1)`)
