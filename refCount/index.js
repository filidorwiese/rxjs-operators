import { interval } from 'rxjs'
import { publish, map, tap, refCount } from 'rxjs/operators'

// Refcount unconnects from source when there are no more subscribers
//
// With observable.publish().refCount(), once the observer completes, it will not restart
// if a new subscriber is added after completion. Whereas with observable.share(), if the
// underlying observer completes and a new subscriber is added later, the observer
// effectively begins a new execution and starts emitting data.

const currencyTicker$ = interval(1000).pipe(
  tap(() => console.log('PINGED API')),
  map(n => `Currency info #${n} - [placeholder]`),
  publish(),
  refCount()
)

const sub1 = currencyTicker$.subscribe((v) => console.log(`Left widget: ${v}`))

const sub2 = currencyTicker$.subscribe((v) => console.log(`Right widget: ${v}`))

// No need to connect when using refCount
// currencyTicker$.connect()

setTimeout(() => {
  console.log('Subscription 1 unsubscribed ')
  sub1.unsubscribe()
}, 2000)

setTimeout(() => {
  console.log('Subcription 2 unsubscribed')
  sub2.unsubscribe()
}, 3000)
