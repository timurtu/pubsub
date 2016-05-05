/**
 * Created by timur on 5/4/16.
 */

import pubsub from '../lib/pubsub'
import {currentEvents} from '../lib/pubsub'


describe('pub', () => {

  it('should not do anything', () => {

    pubsub.pub()
  })

  it('should publish to all events', () => {

    pubsub.pub('foo')
  })


  it('should publish data to event1 and event2', () => {

    pubsub.pub('data', 'event1', 'event2')
  })


})

describe('sub', () => {

  it('should do nothing', () => {
    pubsub.sub()

    pubsub.sub('dkslja')

    pubsub.sub(() => {

    })


  })

  it('should subscribe to all events', () => {
    pubsub.sub(data => {

    })
  })


  it('should add event1 to the list of events being listened to', () => {

    pubsub.sub(data => {

    }, 'event1')

  })
})