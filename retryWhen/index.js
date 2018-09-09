import { timer, interval } from 'rxjs'
import { tap, retryWhen } from 'rxjs/operators'

const buggyApi$ = timer(1000).pipe(
  tap(() => { console.log('Api Called') }),
  tap(() => { throw new Error('An error occured') }),
  retryWhen(() => interval(1000))
)

buggyApi$.subscribe(console.log)