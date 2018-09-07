import { interval } from 'rxjs'
import { filter } from 'rxjs/operators'

const range = interval(400)

range
  .pipe(
    filter(v => v % 2 === 0)
  )
  .subscribe(console.log)