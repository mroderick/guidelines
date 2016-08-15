import test from 'ava';
import {CLIEngine} from 'eslint';
import eslintrc from '../';

const cli = new CLIEngine({
  useEslintrc: false,
  baseConfig: eslintrc,

  // This rule fails when executing on text.
  rules: {
    indent: 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
  },
});

function lint(text) {
  // @see http://eslint.org/docs/developer-guide/nodejs-api.html#executeonfiles
  // @see http://eslint.org/docs/developer-guide/nodejs-api.html#executeontext
  const linter = cli.executeOnText(text);
  return linter.results[0];
}

function wrapText(text) {
  return `${text.trim()}\n`;
}

test('ensure code passes lint', (t) => {
  const result = lint(wrapText(`
    function bar() {
      return true;
    }
    bar();
  `));
  t.truthy(result.errorCount === 0);
  t.truthy(result.warningCount === 0);
});

test('should error on browser globals', (t) => {
  const result = lint(wrapText(`
    document.location.href = 'foo';
  `));
  t.truthy(result.errorCount === 1);
  t.regex(result.messages[0].message, /is not defined/);
});

test('should handle react components', (t) => {
  const result = lint(wrapText(`
    import React from 'react';

    export default class TestComponent extends React.Component {
      render() {
        return (
          <h1>Hello world!</h1>
        );
      }
    }
  `));
  t.truthy(result.errorCount === 0);
  t.truthy(result.warningCount === 0);
});
