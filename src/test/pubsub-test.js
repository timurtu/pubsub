/**
 * Created by timur on 5/4/16.
 */

import PubSub from '../pubsub'

import { expect } from 'chai'

describe('sub', () => {

  beforeEach(() => {

    PubSub.currentEvents = {
      'foo': function (data) {
      }
    }

  })

  it('should attach an event name and callback to currentEvents', () => {

    PubSub.sub(data => {

    }, 'bar')

    expect(PubSub.currentEvents).to.have.all.keys(['bar', 'foo']);

  })

  it('should attach an event names and callbacks to currentEvents', () => {

    PubSub.sub(data => {

    }, 'bar', 'baz')

    expect(PubSub.currentEvents).to.have.all.keys(['bar', 'baz', 'foo']);

  })

})

describe('pub', () => {

  let publishedDataFoo, publishedDataBar, publishedDataBaz

  beforeEach(() => {

    publishedDataFoo = ''
    publishedDataBar = ''
    publishedDataBaz = ''

    PubSub.currentEvents = {
      'foo': function (data) {
        publishedDataFoo = data
      },
      'bar': function(data) {
        publishedDataBar = data
      },
      'baz': function(data) {
        publishedDataBaz = data
      }
    }

  })

  it('should publish data to single subscribed event', () => {

    PubSub.pub('new data', 'foo')

    expect(publishedDataFoo).to.equal('new data')

  })

  it('should publish data to two subscribed events', () => {

    PubSub.pub('new data', 'foo', 'bar')

    expect(publishedDataFoo).to.equal('new data')
    expect(publishedDataBar).to.equal('new data')

  })

  it('should publish data to all events', () => {

    PubSub.pub('new data')

    expect(publishedDataFoo).to.equal('new data')
    expect(publishedDataBar).to.equal('new data')
    expect(publishedDataBaz).to.equal('new data')

  })

})

describe('unsub', () => {

  beforeEach(() => {

    PubSub.currentEvents = {
      'foo': function (data) {
      },
      'bar': function (data) {
      }
    }

  })

  it('should remove all events', () => {

    PubSub.unsub()

    expect(PubSub.currentEvents).to.be.empty

  })

  it('should remove a single event', () => {

    PubSub.unsub('bar')

    expect(PubSub.currentEvents).to.have.all.keys(['foo'])

  })

})
