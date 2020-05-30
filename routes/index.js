const Router = require("express").Router()

// Routes
const ComedianRoute = require('./comedianRoute')

// Services
const { ComedianService } = require('../services')

const initializeRoutes = app => {
    const routes = [
        new ComedianRoute({ ComedianService, Router })
    ]

    routes.forEach(route => {
        route.initialize(app)
        app.use(process.env.PREFIX, route.router)
    })
}

module.exports = initializeRoutes