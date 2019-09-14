const express = require('express')

const knex = require('knex')

const knexfile = require('../knexfile.js')

const knexConfig = knexfile.development

const Projects = require('./project-model.js')

const db = knex(knexConfig)

const router = express.Router()

router.get('/:id', (req, res) => {
    const { id } = req.params    
    Projects.findProjectTasks(id)
    .then(projects => {
        res.json(projects)    
    })
    .catch(error => {
        res.status(500).json({message: "Failed to find"})
    })
})

router.get('/resource/:id', (req, res) => {
    const {id} = req.params
    Projects.findProjectResources(id)
    .then(projects => {
        res.json(projects)
    })
    .catch(error => {
        res.status(500).json({message: "Failed to find Resources"})
    })
})

router.post('/', (req, res) => {
    const projectData = req.body
    db('project').insert(projectData)
    .then(ids => {
        db('project').where({id: ids[0]})
    .then(newProject => {
        res.status(201).json(newProject)
        })
    })
    .catch(error => {
        res.status(500).json({message: "Failed to Post"})
    })
})

router.get('/resources/:id', (req, res) => {
    const resId = req.params.id
    Projects.getResources(resId)
    .then(projects => {
        res.json(projects)
    })
    .catch(error => {
        res.status(500).json({message: "Failed to get projects"})
    })
})

router.get('/resources', (req, res) => {
    Projects.getAllResources()
    .then(resource => {
        res.json(resource)
    })
    .catch(error => {
        res.status(500).json({message: "Falied to get resources"})
    })
})

router.post('/resources', (req, res) => {
    const newResource = req.body
    if (!newResource.resource_name || !newResource.resource_description){
        res.status(400).json({message: "Must provide name and description"})
    } else {
        Projects.insert(newResource)
            .then(resource => {
                Projects.getResources(resource.id).then(postResource => {
                    res.status(201).json(postResource)
                })
            })
            .catch(error => {
                res.status(500).json({message: "Couldn't post Resource"})
            })
        }    
    })

router.get('/tasks', (req, res) => {
    Projects.getTasks()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(error => {
        res.status(500).json({message: "Failed to retreive"})
    })
})

router.post('/tasks', (req, res) => {
    const newTask = req.body
    if (!newTask.task_description || !newTask.project_id){
        res.status(400).json({message: "Must provide id and description"})
    } else {
        Projects.insertTask(newTask)
            .then(task => {
                Projects.getTask(task.id).then(postTask => {
                    res.status(201).json(postTask)
                })
            })
            .catch(error => {
                res.status(500).json({message: "Couldn't post Task"})
            })
        }    
    })

module.exports = router