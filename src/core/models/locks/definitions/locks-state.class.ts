import { LOCK_STATUS } from './locks-status.enum'
import { TLockList } from './locks-list.type'

export class State {
    isProgress: boolean
    locks: TLockList
}