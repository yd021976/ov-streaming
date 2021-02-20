import { UserModel } from '@core/models/user';

export interface IState {
    user: UserModel.IUser
    error: string /** should be null if no error */
    isProgress: boolean
}