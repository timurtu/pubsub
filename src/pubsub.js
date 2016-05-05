/**
 * Created by timur on 5/4/16.
 */

// events that are being listened to
export let currentEvents = []

export default {
  /**
   * Publish data to any number of events
   *
   * @param events
   * @param data
   */
  pub(data, ...events) {

    // Do nothing
    if(!data) {

      return console.log('Please enter some data!')
    }

    // Publish to all events
    if(events.length < 1) {

      return console.log(`${data} was published to all events!`)
      // currentEvents.forEach(event => {
      //
      // })
    }

    // Publish to listed events
    events.forEach(event => {

      console.log(`${data} was published to ${event}!`)
    })

  },

  /**
   * Attach a listening callback to the events
   * defined, if they exist.
   *
   * @param events
   * @param data
   */
  sub(callback, ...events) {
    if(!callback)
      return console.log(`Please enter a callback with data!`)

    if(events.length < 1)
      return console.log(`Please enter events to subscribe to!`)

    events.forEach(event => {

      console.log(`Subscribed to ${event}`)
      currentEvents.push(event)
    })
    
  }

}


/**
 * Fire an event
 *
 * @param event
 */
function dispatch(event) {
  console.log('dispatch')
}