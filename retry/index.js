import { timer } from 'rxjs'
import { tap, retry } from 'rxjs/operators'

const buggyApi$ = timer(2000).pipe(
  tap(() => { console.log('Api Called') }),
  tap(() => { throw new Error('An error occured') }),
  retry(3)
)

buggyApi$.subscribe(console.log)