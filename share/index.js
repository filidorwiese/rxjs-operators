import { interval } from 'rxjs'
import { share, map, tap } from 'rxjs/operators'

// Same as publish, but no need to .connect()

const currencyTicker$ = interval(1000).pipe(
  tap(() => console.log('PINGED API')),
  map(n => `Currency info #${n} - [placeholder]`),
  share()
)

currencyTicker$.subscribe((v) => console.log(`Left widget: ${v}`))
currencyTicker$.subscribe((v) => console.log(`Right widget: ${v}`))
