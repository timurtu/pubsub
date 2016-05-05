# pubsub

## Pure JavaScript Publishing and Subscribing

```javascript
import {pub, sub} from 'pubsub'


pubsub.sub('event1', data => {
  console.log(`Received ${data}!`)
})

pubsub.pub('foo', 'event1', 'event2')
// Received foo!

pubsub.sub('event2', data => {
  console.log(`Received ${data.toUpperCase()}`)
})

pubsub.pub('bar', 'event1', 'event2')
// Received bar!
// Received BAR!
```