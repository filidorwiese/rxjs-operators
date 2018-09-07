import { range, interval } from 'rxjs'
import { map, mapTo } from 'rxjs/operators'

const notificationAPI = interval(1000)
  .pipe(
    mapTo({ type: 'NOTIFICATON_ARRIVED' })
  )
  .subscribe(console.log)