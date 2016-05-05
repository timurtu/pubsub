# pubsub
## Pure JavaScript Publishing and Subscribing


```javascript
import {pub, sub} from 'pubsub'

pub('event', data => {
  console.log(`Published ${data}`)
})

sub('event', data => {
  console.log(`Received ${data}`)
})

```