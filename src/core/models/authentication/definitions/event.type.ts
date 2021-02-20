import { UserModel } from '@core/models/user'
import { AUTH_EVENT_TYPES } from './events.enum'

export type TEvent = {
    user: UserModel.IUser,
    event_type: AUTH_EVENT_TYPES
}