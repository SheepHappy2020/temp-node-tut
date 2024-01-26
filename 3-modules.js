// CommonJS, every file in node is module (by default)
// Modules - Encapsulated Code (only share minimum)
// 3 - 7 together
const names = require('./4-name');
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
// did not setup any value to it
require('./7-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)