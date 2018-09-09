import { timer, forkJoin, throwError } from 'rxjs'
import { concatAll, mapTo } from 'rxjs/operators'

const friendsApi$ = timer(1000)
  .pipe(
    mapTo({ name: 'Frank' })
  )

const preferencesApi$ = timer(1000)
  .pipe(
    mapTo({ theme: 'dark' }),
    // mapTo(throwError('API errored')), concatAll()    // If api throws, forkJoin errors as expected
  )

forkJoin(friendsApi$, preferencesApi$)
  .subscribe({
    next: console.log,
    complete: v => console.warn('completed'),
    error: v => console.warn('error', v)
  })