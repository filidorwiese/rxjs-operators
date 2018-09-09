import { interval } from 'rxjs'
import { mergeAll, windowWhen, tap, filter } from 'rxjs/operators'

interval(100)
  .pipe(
    windowWhen(
      () => timer(1000)
    ),
    tap(_ => console.log('NEW WINDOW!')),
    mergeAll()
  )
  .subscribe(console.log)