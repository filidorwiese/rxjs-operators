import { range } from 'rxjs'

const rangeObservable = range(0,15)

rangeObservable
  .subscribe(console.log)
