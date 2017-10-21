
******************************************************************************************************************************        
## GIT
******************************************************************************************************************************

SET UP GIT FOR FIRST TIME:

1 add a .gitignore to the root directory
    go to: https://www.gitignore.io/
    type in node and generate
    this generates a .gitignore file for you...
    copy and paste this into the .gitignore file in your root directory.
    this ignores stuff like node_modules folder which is useless...


2 Go to github and sign in - create a new repository.

Run these commands:
```shell
git init    
gst    
git add .    
gst    
git commit -m "<description>"    
gst    
git remote add origin https://github.com/...
git push -u origin master
```

PUSHING CHANGES:

change file
```shell
gst
git add .
gst
git commit -m "description"
gst
git push -u origin master
```

******************************************************************************************************************************
# Scripts
******************************************************************************************************************************
```shell
yarn init (Creates package.json)

yarn add --dev eslint
yarn eslint -- --init (asked questions to create eslintrc.js - but we took from: https://github.com/samerbuna/.files/blob/master/.eslintrc.js)
yarn add --dev babel-eslint
yarn add --dev eslint-plugin-react

yarn add express
yarn add ejs (View Engine)
yarn add pm2 (nodemon alternative that restarts server on the fly)

yarn add babel-cli
yarn add babel-preset-env
yarn add babel-preset-stage-2
yarn add babel-preset-react

yarn add react
yarn add react-dom
yarn add webpack
yarn add babel-loader (for webpack rules)
yarn add babel-polyfill (for webpack for es6's asyncFunc())

yarn add --dev jest
```

******************************************************************************************************************************
# Babel
******************************************************************************************************************************

In package.json, can use imports in Node.js (ES6) because of the babel preset.

```shell
"babel": {
    "presets": ["react", "env", "stage2"]
}
```

******************************************************************************************************************************
# Start
******************************************************************************************************************************

~/lib/server.js is where we create our express app.
~/lib/config.js config file with port 8080 
Hence to start application

`node lib/server.js`
Browse to: http://localhost:8080/
