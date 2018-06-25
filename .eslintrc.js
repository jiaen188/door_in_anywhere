module.exports = {
    "env": {
        "node": true,
        "mocha": true,
        "es6": true
    },
    "globals": {
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "script"
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