import { of } from 'rxjs'

const ofObservable = of('a', 'c', 5, ['b'], {d: true})
  .subscribe(console.log)
