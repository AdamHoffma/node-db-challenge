const express = require('express')

const knex = require('knex')

const knexfile = require('../knexfile.js')

const knexConfig = knexfile.development

const db = knex(knexConfig)

const router = express.Router()



module.exports = router