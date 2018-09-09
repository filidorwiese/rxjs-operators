import { interval } from 'rxjs'
import { mergeAll, window, tap } from 'rxjs/operators'

// Takes a window of values until closed, like buffer, and groups them until closed

interval(100)
  .pipe(
    window(interval(500)),
    tap(_ => console.log('NEW WINDOW!')),
    mergeAll()
  )
  .subscribe(console.log)