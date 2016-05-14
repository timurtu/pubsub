/**
 * Created by timur on 5/4/16.
 */
class PubSub {

  constructor(currentEvents = []) {
    this.currentEvents = currentEvents
  }

  pub(data, ...eventNames) {

    this.currentEvents.forEach(event => {

      const eventIndex = eventNames.indexOf(event.eventName)

      this.currentEvents[eventIndex].callback(data)

    })

  }

  sub(callback, ...eventNames) {

    this.currentEvents = eventNames.map((eventName, i) => {
      
      return {eventName, callback}
    })

    return this.currentEvents
  }
}

export default new PubSub()
