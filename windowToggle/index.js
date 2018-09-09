import { interval } from 'rxjs'
import { mergeAll, windowToggle, tap, filter } from 'rxjs/operators'
import { fromStdIn } from '../utility'

// Starts a window on key 'p' then closes the window on 'o'

interval(100)
  .pipe(
    windowToggle(
      fromStdIn().pipe(filter(k => k === 'p')),
      () => fromStdIn().pipe(filter(k => k === 'o'))
    ),
    tap(_ => console.log('NEW WINDOW!')),
    mergeAll()
  )
  .subscribe(console.log)