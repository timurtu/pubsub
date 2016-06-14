/**
 * Created by timur on 5/4/16.
 */

let events = {}

export function pub(data, ...names) {

  names.forEach(name => events[name](data))
}

export function sub(callback, ...names) {

  if(names.length <= 1) {
    return events[names[0]] = callback
  }

  events = names.reduce(function (merged, event) {
    return Object.assign(merged, events[event] = callback)
  }, events)
}
