// install
// $ npm install --save-dev webpack webpack-cli dotenv-webpack
// build
// $ npm run build
const path   = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'production',
    plugins: [
	new Dotenv({ systemvars: true }),
    ],
    entry: [
	path.join(__dirname, "src/js/scale.fix.js"),
	path.join(__dirname, "src/js/insta.js"),
	path.join(__dirname, "src/js/facebook.js"),
	path.join(__dirname, "src/js/slider.js")
    ],
    output: {
	path: path.resolve(__dirname, "assets/js"),
        filename: 'bundle.js'
    }
};
