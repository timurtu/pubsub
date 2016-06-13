# pubsub

## Pure JavaScript Publishing and Subscribing

```javascript
import PubSub from 'pubsub'

PubSub.sub(data => {
  console.log(`Received ${data}!`)
}, 'event1')

PubSub.pub('foo', 'event1')
// Received foo!

PubSub.sub(data => {
  console.log(`Received ${data.toUpperCase()}`)
}, 'event2')

PubSub.pub('bar', 'event1', 'event2')
// Received bar!
// Received BAR!

PubSub.pub('every event')
// Received every event!
// Received EVERY EVENT!
```

## Build from source
- `git clone` this repo
- `cd` into this repo
- `npm install`
- `npm test`
