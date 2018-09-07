import { timer, interval } from 'rxjs'

interval(1000)
  .subscribe((v) => console.log(`interval: ${v}`))

timer(0, 250)
  .subscribe((v) => console.log(`timer: ${v}`))
