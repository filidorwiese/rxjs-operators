import { interval } from 'rxjs'
import { mergeAll, windowTime, tap } from 'rxjs/operators'

interval(100)
  .pipe(
    windowTime(1000),
    tap(_ => console.log('NEW WINDOW!')),
    mergeAll()
  )
  .subscribe(console.log)