import { timer } from 'rxjs'

timer(0, 250)
  .subscribe((v) => console.log(`timer: ${v}`))
