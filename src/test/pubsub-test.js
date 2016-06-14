/**
 * Created by timur on 5/4/16.
 */

import {pub, sub} from '../pubsub'

import {expect} from 'chai'

describe('pubsub', () => {

  it('should publish to a single event that is being subscribed to', () => {

    let myData = 'my data'

    sub(data => {
      myData = data
    }, 'event')

    pub('my other data', 'event')

    expect(myData).to.equal('my other data')

  })

  it('should publish the same data to different events', () => {

    let myData = ''

    sub(data => {
      myData = data
    }, 'event1', 'event2')

    pub('my data', 'event1', 'event2')

    expect(myData).to.equal('my data')

  })

  it('should give different data to different events', () => {

    let myData = ''

    sub(data => {
      myData = data
    }, 'event1', 'event2')

    pub('my data', 'event1', 'event2')
    expect(myData).to.equal('my data')

    pub('my other data', 'event2')
    expect(myData).to.equal('my other data')

    pub('another data', 'event2')
    expect(myData).to.equal('another data')

  })

})