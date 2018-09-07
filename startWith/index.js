import { timer } from 'rxjs'
import { map, startWith } from 'rxjs/operators'

console.log('started')
timer(4000, 500)
  .pipe(
    map(n => n + 1),
    startWith(0)
  )
  .subscribe(console.log)
