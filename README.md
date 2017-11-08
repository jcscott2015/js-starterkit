# js-starterkit
## My JavaScript Development Starter Kit

This is a starter kit that uses webpack 3, mocha, chai, and jsdom 11.
## Get Started

1. **Install [Node LTS](https://nodejs.org)**. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)
2. **Clone this repository.** - `git clone https://github.com/jcscott2015/js-starterkit.git` or [download the zip](https://github.com/jcscott2015/js-starterkit/archive/master.zip)
3. **Make sure you're in the directory you just created.** - `cd javascript-development-environment`
4. **Install Node Packages.** - `npm install`
5. **Run the app.** - `npm start -s`
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching files all your files. Every time you hit save the code is rebuilt (in memory), linting runs, and tests run automatically. (Currently, you'll have to reload the browser page manually.) Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.
6. **Build the app.** - `npm run build`
This will run linting and tests and then build the app and place minimized and optimized code files in the dist folder. These can be copied to your public server.
7. Having issues? See below.

## Having Issues? Try these things first:

1. Run `npm install` - If you forget to do this, you'll see this: `babel-node: command not found`.
2. Make sure you're running the latest version of Node. Or, use [Node LTS](https://nodejs.org/en/download/releases/) if you're having issues on Windows. Node 7 has issues on some Windows machines.
3. Make sure files with names that begin with a dot (.babelrc, .editorconfig, .eslintrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.
4. Don't run the project from a symbolic link. It will cause issues with file watches.
5. Having linting issues? Delete any .eslintrc that you're storing in your user directory. Also, disable any ESLint plugin / custom rules that you've enabled within your editor. These will conflict with the ESLint rules defined in the course.
6. Seeing `Error: listen EADDRINUSE :::3000`? That means port 3000 is already in use on your machine. You probably have another instance of this project running on your machine in a different window. So find that window and kill the other instance using Ctrl+C.
7. Nothing above work? Delete your node_modules folder and re-run npm install.

### Development Dependencies

| **Dependency**              | **Use**                                                                                                   |
| --------------------------- | --------------------------------------------------------------------------------------------------------- |
| babel-cli                   | Babel Command line interface                                                                              |
| babel-core                  | Babel Core for transpiling the new JavaScript to old                                                      |
| babel-loader                | Adds Babel support to Webpack                                                                             |
| babel-preset-env         | Babel preset for running all the latest standardized JavaScript features                                  |
| babel-register              | Register Babel to transpile our Mocha tests                                                               |
| chai                       | Node BDD/TDD assertion library for node.js and the browser. Test framework agnostic.                                                                                |
| chalk                       | Node Terminal string styling done right                                                                                |
| cheerio                     | Supports querying DOM with jQuery like syntax - Useful in testing and build process for HTML manipulation |
| compression                       | Node.js compression middleware                                                                                |
| cross-env                   | Cross-environment friendly way to handle environment variables                                            |
| css-loader                  | Add CSS support to Webpack                                                                                |
| eslint                      | Lints JavaScript                                                                                          |
| eslint-plugin-import        | Advanced linting of ES6 imports                                                                           |
| eslint-watch                | Add watch functionality to ESLint                                                                         |
| express        | Fast, unopinionated, minimalist web framework                                                                   |
| extract-text-webpack-plugin | Extracts CSS into separate file for production build                                                      |
| html-webpack-plugin                      | Simplifies creation of HTML files to serve your webpack bundles                                                                      |
| jsdom                       | In-memory DOM for testing                                                                                 |
| jsdom-schema-faker                       | JSON-Schema + fake data generators                                                                                 |
| jsdom-server                       | Serves JSON files through REST routes                                                                                 |
| localtunnel                       | Expose localhost to the world                                                                                |
| mocha                       | JavaScript testing library                                                                                |
| nock                       | Node HTTP Server mocking for node.js                                                                                 |
| node-sass                       | Node libsass wrapper                                                                                |
| npm-run-all                 | Display results of multiple commands on single command line                                               |
| nsp                 | The Node Security (nodesecurity.io) command line interface                                               |
| numeral                 | Format and manipulate numbers                                               |
| rimraf                      | Delete files                                                                                              |
| sass-loader                  | Add SASS loading support to Webpack                                                                        |
| style-loader                | Add Style support to Webpack                                                                              |
| webpack                     | Bundler with plugin system and integrated development server                                              |
| webpack-dev-middleware      | Adds middleware support to webpack                                                                        |
| webpack-hot-middleware      | Adds hot reloading to webpack                                                                             |
