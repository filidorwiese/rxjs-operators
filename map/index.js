import { range, interval } from 'rxjs'
import { map, mapTo } from 'rxjs/operators'

const obs = range(1,10)
  .pipe(
    map((v) => v * v)
  )
  .subscribe((v) => {
    console.log(v)
  })
