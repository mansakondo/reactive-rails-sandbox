import ApplicationController from './application_controller'

export default class extends ApplicationController {
  increment(event) {
    event.preventDefault()
    this.stimulate('Counter#increment', 1)
  }
}
