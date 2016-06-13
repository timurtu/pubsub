/**
 * Created by timur on 5/4/16.
 */



// export default new class PubSub {
//
//   constructor(currentEvents = {}) {
//     this.currentEvents = currentEvents
//   }
//
//   pub(data, ...events) {
//
//     events.map(event => console.log(event))
//
//     // if (events.length === 0) {
//     //   for(const eventName in this.currentEvents) {
//     //     if(this.currentEvents.hasOwnProperty(eventName)) {
//     //       this.currentEvents[eventName](data)
//     //     }
//     //   }
//     //   return
//     // }
//     //
//     // events.forEach(eventName => {
//     //   if (this.currentEvents.hasOwnProperty(eventName)) {
//     //     this.currentEvents[eventName](data)
//     //   }
//     // })
//   }
//
//   sub(callback, ...events) {
//     events.forEach(eventName => {
//       const event = this.currentEvents[eventName] = callback
//       this.currentEvents = Object.assign(this.currentEvents, event)
//     })
//   }
//
//   unsub(...events) {
//     if (events.length === 0) {
//       return this.currentEvents = {}
//     }
//
//     events.forEach(eventName => {
//       if (this.currentEvents.hasOwnProperty(eventName)) {
//         delete this.currentEvents[eventName]
//       }
//     })
//   }
// }
