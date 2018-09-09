import { interval } from 'rxjs'
import { tap, mergeAll, windowCount } from 'rxjs/operators'

interval(100)
  .pipe(
    windowCount(10),
    tap(_ => console.log('NEW WINDOW!')),
    mergeAll()
  )
  .subscribe(console.log)