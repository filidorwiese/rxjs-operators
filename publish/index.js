import { interval } from 'rxjs'
import { publish, map, tap } from 'rxjs/operators'

const currencyTicker$ = interval(1000).pipe(
  tap(() => console.log('PINGED API')),
  map(n => `Currency info #${n} - [placeholder]`),
  publish()
)

currencyTicker$.subscribe((v) => console.log(`Left widget: ${v}`))
currencyTicker$.subscribe((v) => console.log(`Right widget: ${v}`))

setTimeout(() => {
  console.log('Connected')
  currencyTicker$.connect()
}, 2000)
