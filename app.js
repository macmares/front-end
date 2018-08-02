'use strict'

const color = require('chalk')
const debug = require('debug')('front-end:demo')

let msg = 'Hola Mundo'

//console.log(`El Mensaje es : ${color.yellow.bold(msg)}`)
debug(`El Mensaje es : ${color.yellow.bold(msg)}`)
