import { interval } from 'rxjs'
import { shareReplay, share, map, tap } from 'rxjs/operators'

// Like share, but gets latest value(s) on subscribtion

const currencyTicker$ = interval(1000).pipe(
  tap(() => console.log('PINGED API')),
  map(n => `Currency info #${n} - [placeholder]`),
  // share(),
  shareReplay(1)
)

currencyTicker$.subscribe((v) => console.log(`Left widget: ${v}`))

setTimeout(() => {
  console.log('Right widget subscribed')
  currencyTicker$.subscribe((v) => console.log(`Right widget: ${v}`))
}, 2000)
