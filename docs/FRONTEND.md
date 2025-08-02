[Back to README](../README.md)

# **Front-End Technology**
The front end for the landing page is built primarily using React.js, Javascript and JSX. 



## **Content**
*   [Front-End Libraries](#front-end-libraries)
*   [Style Sheet Language](#style-sheet-language)
*   [Components](#components)

## **Front-End Libraries**
<a name="front-end-libraries"></a>

Link to [package.json](../package.json)
*   [React documentation](https://reactjs.org/docs/getting-started.html) 
*   [React-DOM](https://www.npmjs.com/package/react-dom)
*   [React-Scripts](https://www.npmjs.com/package/react-scripts) 
*   [Webfontloader](https://www.npmjs.com/package/webfontloader)
*   [Node-sass](https://www.npmjs.com/package/node-sass) - Allows us to import .scss files into our components without needing to manually compile it into .css

## **Style Sheet Language**
<a name="style-sheet-language"></a>
The style sheet language used is Syntactically Awesome Stylesheets (SASS). The file architecture for SASS follows the 7-1-pattern. Stylesheets are stored inside files that end with .scss.

*   [SASS docs](https://sass-lang.com/documentation/file.SASS_REFERENCE.html)
*   [7-1-pattern](https://sass-guidelin.es/#the-7-1-pattern)

## **Components**
<a name="components"></a>
Components are reusable pieces of code that returns a React element. Components can be smart/stateful components or dumb/pure components. 

*   ### **Smart/Stateful Components**
    *   Smart/Stateful components are components that manage its own [state](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class). These tend to be class-like object that extends [React.Component](https://reactjs.org/docs/react-api.html#reactcomponent). Smart/Stateful components focus primarily on implementing functionality to the web app rather than displaying elements.

*   ### **Dumb/Pure Components**
    *   Dumb/Pure components' main job is to display elements. These components should not have a state, and will instead have [props](https://reactjs.org/docs/glossary.html#props) passed down to them.