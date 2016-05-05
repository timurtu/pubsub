/**
 * Created by timur on 5/4/16.
 */

import pubsub from '../lib/pubsub'


describe('Publishing an event', () => {

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