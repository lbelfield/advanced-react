# Scripts
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


# Babel
In package.json, can use imports in js (ES6) because of the babel preset.
"babel": {
    "presets": ["react", "env", "stage2"]
},


# Start
~/lib/server.js is where we create our express app.
~/lib/config.js config file with port 8080 
Hence to start application

`node lib/server.js`
Browse to: http://localhost:8080/
