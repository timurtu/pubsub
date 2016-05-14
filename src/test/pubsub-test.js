/**
 * Created by timur on 5/4/16.
 */

import PubSub from '../pubsub'

import {
  assert,
  expect
} from 'chai'

let callback

beforeEach(() => {

  callback = data => {

  }

})

describe('sub', () => {

  it('should attach an event name and callback to currentEvents', () => {

    const subscriptions = PubSub.sub(callback, 'foo')

    expect(subscriptions).to.deep.equal([{eventName: 'foo', callback}])

  })

  it('should attach event names and callbacks to currentEvents', () => {


    const subscriptions = PubSub.sub(callback, 'foo', 'bar')

    expect(subscriptions).to.deep.equal([
      {eventName: 'foo', callback},
      {eventName: 'bar', callback}
    ])

  })

})

describe('pub', () => {

  it('should publish data to a subscribed event', () => {

    let oldData = 'old data'

    PubSub.sub(data => {
      oldData = data
    }, 'event1')

    PubSub.pub('new data', 'event1')

    expect(oldData).to.equal('new data')

  })


})