const express = require('express')

const knex = require('knex')

const knexfile = require('../knexfile.js')

const knexConfig = knexfile.development

const db = knex(knexConfig)

const router = express.Router()

router.get('/task', (req, res) => {
    db('task')
    .then(projects => {
        res.json(projects)
    })
    .catch(error => {
        res.status(500).json({message: "Failed to find"})
    })
})

module.exports = router