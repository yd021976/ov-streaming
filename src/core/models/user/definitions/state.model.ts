import { IUser } from './user.model'
import { UserModel } from '..';
import { ApplicationModel } from '@core/models/application';

export interface IUsersState extends ApplicationModel.IBaseState{
    users: IUser[]
    selected_user: UserModel.IUser
}