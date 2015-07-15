===
CSS
===

Working with styling a large, rich and modern web app can be a challenge to organise and test. We have a forward looking CSS stack which should mitigate some of the usual problems associated with such work.

*************************
One solution, Two Stacks.
*************************
The bulk of your styles will be written in the vanilla CSS3 spec. These styles are found each components directory as a sibling of the JSX and named the same. These are imported to the JSX, transformed by Webpack and **locally scoped**.

The rest of the styles are in a global LESS stack which we will hope to keep as light as possible. We will mainly be using `SUIT CSS utility classes <https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md#u-utilityName>`_ in this file.

We also have a CSS/Javascript bridge in place for the CSS Modules.

CSS Modules
===========
SUIT, BEM, OOCSS, SMACCS all try to solve the problem that all CSS sits in the global scope. Webpack solves this problem with React by transforming an imported stylesheets selectors to random hashes which are then applied by React.

The quickest way to illustrate this is by example.

Input
.. code-block:: javascript
   import styles from 'styles.css'

   class example extends React.Component {
     render(
       <button className={styles.defaultButton}>Button</button>
     )

    }

Output
.. code-block:: HTML
   <button class="Y2xhc3NuYW1l">Button</button>

More on CSS Modules can be found here : https://github.com/webpack/css-loader#root-relative-urls

The Global CSS
============
The LESS is compiled to a global stylesheet….

CSS Build Process
==================
The CSS is built via Webpack. We have `POST-CSS <https://github.com/postcss/postcss>`_ in place doing most of the work, so feel free to add any new modules. Currently we are using two POST-CSS Modules; the ubiquitous Autoprefixer and CSS Variables.

Linitng and Code Presentation
========================
We have basic CSS Linting in place with the npm command 'npm run lintcss'. It's not ideal and it's status is documented here : LYS-725

Debugging and Production
====================
CSSModules have been configured in a different manner for development and production. These can be customised the in ./webpack/loaders.js file

Linking CSS And Javascript
=====================
Sometime you need to share variables between CSS and Javascript. This practice isn't to be encouraged as we have only one project wide variable file. However, it might be useful for a color set or animation timings. The file can be found in the constants directory ./app/constants/styles.json and is injected into the CSS in ./webpack/makeConfig.js
