import { fromEvent } from 'rxjs'
import { tap, map } from 'rxjs/operators'

fromEvent(document.getElementById('form'), 'submit')
  .pipe(
    tap(console.log)
  )
  .subscribe((e) => {
    e.preventDefault()
    console.log('submitted')
  })

fromEvent(document.getElementById('species'), 'change')
  .pipe(
    map(e => e.target.value)
  )
  .subscribe(console.log)

fromEvent(document.getElementById('name'), 'input')
  .pipe(
    map(e => e.target.value)
  )
  .subscribe(console.log)
