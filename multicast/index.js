import { interval, BehaviorSubject } from 'rxjs'
import { multicast, tap, map } from 'rxjs/operators'

// Like publish, but multicasts values into a given Subject

const subject$ = new BehaviorSubject(-1)

const currencyTicker$ = interval(1000).pipe(
  tap(() => console.log('PINGED API')),
  map(n => `Currency info #${n} - [placeholder]`),
  multicast(subject$)
)

currencyTicker$.subscribe((v) => console.log(`Left widget: ${v}`))
currencyTicker$.subscribe((v) => console.log(`Right widget: ${v}`))

currencyTicker$.connect()