# Appstud React-Native starter
> react-native project

This is the README to use for your new project.  
**It must be kept up-to-date at all cost.**

This file should at least:
- explain how to install and run the project
- list the libs used in the project and how to use them if necessary
- explain how to solve the recurrent issues you can stumble upon while developing

Now remove this header and happy coding! :)

----------------------------------------------------------------------------------------------------
# Project name
> react-native project

## Technical stack
- react-native
- react-navigation
- i18n-js
- react-native-languages
- react-native-config

## Dev environment
### Requirements
- node 8.11.x or later / npm 5.6.x or later
- avoid using `npm` – use `yarn`.

### Quick project setup
``` bash
# Install dependencies
$ yarn install
  
# Serve
$ yarn start

# Configure app
$ cp .env.example .env

# Then configure the API_URL and other variables in the .env file
```

## Available yarn scripts
- **yarn start**: starts the react-native metro server
- **yarn test**: runs the tests
- **yarn eslint**: shows eslint errors for all source files
- **yarn lint-check**: shows output of prettier-eslint for all source files
- **yarn lint**: runs prettier-eslint on all source files and update them

## Code style
This project uses [prettier](https://github.com/prettier/prettier) and [eslint](https://github.com/eslint/eslint) to format the code.
The two linters are linked by [prettier-eslint](https://github.com/prettier/prettier-eslint).

All code pushed to the repository must respect the coding standards enforced by prettier and eslint.

A pre-commit hook will auto-run prettier-eslint at each commit and format the code automatically 
then include the resulting code in the commit.
This hook is not magic nor meant to replace good coding practices, so code wisely :)

## Structuring React code
All application code must be located in `./src` folder.
Try to organize components by functionality. Each functionality should be a "module" and should be located
in the modules directory.  
Common code should be either in "common" directory (components and assets) or in they own directory
at the root of src/ for important stuff such as api abstraction or navigation.

Basic folder structure to follow:
- **src/**
  - **api/**: Code related to the communication with external services
  - **commons/**: source code and assets used by two or more modules of the app
  - **i18n/**: languages and translation strings available in the app
  - **navigation**/: code related to react-navigation
  - **themes**/: common variables related to graphic elements like colors, rounded corners radiuses, ...
  - **modules**/: modules (functionalities) of the application

A module should have the following structure:  
- **/assets** : contains all static assets specific to this module (images, fonts, ...)  
- **/components** : contains "dumb" components (presentational components) used in the module  
- **/containers** : contains smart components managing complex states and using dumb components  
- **/duck** : contains redux state management code, explanation later on  
- **/scenes** : contains components (dumb or smart) that match to a page of the app  

_There are README files in the mentioned folders and comments in the template files if you need 
more explanation, please read them._

When designing components pay special attention on minimising unnecessary re-renders and 
tree reconciliation. Rely on `PureComponents` and maintain shallow equality on your data 
if it's not getting changed. 

Styles should be in the same file as the component they are related to. Avoid creating separate "styles.js"
files as it adds to the cognitive charge of having several files to be aware of during development
for the same component and several files with the exact same name in the IDE.

For the same reason, always prefer naming your files with the name of the component and avoid naming
everything index.js. Use an index.js file only if you want to hide some implementation or bundle
several files as one logical component (like for ducks).

### Redux
If you use Redux, follow the following "duck" pattern.
Create a "duck" folder in your module like the provided example.
This pattern is inspired from [this article](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be).

### i18n
We use [react-native-languages](https://github.com/react-community/react-native-languages) for i18n.  
As we are working in a multi-language environment, every project should have strings in English version,
_even if the end product will only be in French_. This ensure people from everywhere can work on the
project.

### Forms
For forms management use Formik instead of Redux-Forms, which is almost always overkill.

## Troubleshooting
This section should cover every cryptic error and weird behaviour of the app that one can encounter
during development, so that the next guy don't waste half a day like you just did :)

##### \<Cryptic error message when doing action x\>
> \<Explanation on how to fix the error\>

##### \<Weird stuff happening when using component y\>
> <Explanation on why it's doing that because the mock api or whatever>
