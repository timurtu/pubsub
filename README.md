# pubsub
Pure JavaScript Publishing and Subscribing

import {pub, sub} from 'etp-core-pubsub-jr'

```javascript
pub('event', data => {
  console.log('Published ' + data)
})

sub('event', data => {
  console.log('Received ' + data)
})
```