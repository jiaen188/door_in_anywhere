module.exports = {
    "env": {
        "node": true,
        "mocha": true,
        "es6": true
    },
    "globals": {
    },
    "parser": "babel-eslint",
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "script",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        }
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": ["error", {
            "allow": ["warn", "error", "info"]
        }]
    }
};