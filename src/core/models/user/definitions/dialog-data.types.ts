import { AsyncValidator } from '@angular/forms'
import { Observable } from 'rxjs'
import { IUser } from './user.model'
import { PermissionModel } from '@core/models/permissions'

export namespace DIALOGS {
    export type ADD_USER_DIALOG_RESULT = {
        cancelled: boolean,
        user: IUser
    }
    export type ADD_USER_DIALOG_DATA = {
        availableRoles: Observable<PermissionModel.RoleEntity[]>,
        validators: {
            name: AsyncValidator,
            email?: AsyncValidator,
            password?: AsyncValidator,
            roles?: AsyncValidator
        } /** async validator for user name form field */
    }
}