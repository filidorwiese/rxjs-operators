import { interval } from 'rxjs'
import { map, pluck } from 'rxjs/operators'

const friendsApi =
  interval(1000)
  .pipe(
    map(i => ({ name: `Friend #${i}`, mutualFriends: i * 2 + 1 })),
    pluck('name')
  )
  .subscribe(console.log)