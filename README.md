
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
    `git init`
    `gst` (notice everything in red)
    `git add .`
    `gst (notice everything in green)`
    `git commit -m "description"`
    `gst` (notice now says nothing to commit - your code is safe)
    (the next step depends on the generated url)
    `git remote add origin https://github.com/...`
    `git push -u origin master`


PUSHING CHANGES:

change file
`gst` (to see what is outstanding - notice it is red)
`git add .`
`gst` (notice it is green)
`git commit -m "description"`
`gst` (notice now says nothing to commit - your code is safe)
`git push -u origin master`

******************************************************************************************************************************

******************************************************************************************************************************
# Scripts
******************************************************************************************************************************

`yarn init` (Creates package.json)

`yarn add --dev eslint`
`yarn eslint -- --init` (asked questions to create eslintrc.js - but we took from: https://github.com/samerbuna/.files/blob/master/.eslintrc.js)
`yarn add --dev babel-eslint`
`yarn add --dev eslint-plugin-react`

`yarn add express`
`yarn add ejs` (View Engine)
`yarn add pm2` (nodemon alternative that restarts server on the fly)

`yarn add babel-cli`
`yarn add babel-preset-env`
`yarn add babel-preset-stage-2`
`yarn add babel-preset-react`

******************************************************************************************************************************
# Babel
******************************************************************************************************************************

In package.json, can use imports in js (ES6) because of the babel preset.
"babel": {
    "presets": ["react", "env", "stage2"]
},

******************************************************************************************************************************
# Start
******************************************************************************************************************************

~/lib/server.js is where we create our express app.
~/lib/config.js config file with port 8080 
Hence to start application

`node lib/server.js`
Browse to: http://localhost:8080/
