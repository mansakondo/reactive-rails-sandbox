import { application } from "./application"

import StimulusReflex from 'stimulus_reflex'
import consumer from '../channels/consumer'
import controller from '../controllers/application_controller'

import controllers from "./**/*_controller.js"
controllers.forEach((controller) => {
  application.register(controller.name, controller.module.default)
})

StimulusReflex.initialize(application, { controller, isolate: true })
application.consumer = consumer
