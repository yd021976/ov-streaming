import { IUser } from '@core/models/user/definitions';
import { LOCK_STATUS } from './locks-status.enum'

export interface ILock {
    owner: IUser
    resource: string
    status: LOCK_STATUS
    message: string
}