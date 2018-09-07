import { range, interval } from 'rxjs'
import { distinctUntilChanged, map } from 'rxjs/operators'

interval(100)
  .pipe(
    map(n => ~~(n/10)),
    distinctUntilChanged()
  )
  .subscribe(console.log)