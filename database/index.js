/*Database mock: Initialize database */

const LocalStorage = require('node-localstorage').LocalStorage;

let localStorage = new LocalStorage('./database/data');

module.exports = localStorage;