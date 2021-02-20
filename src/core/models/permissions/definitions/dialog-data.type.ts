import { AsyncValidator } from '@angular/forms'
import { ServiceEntityDenormalized } from './service.model'
import { Observable } from 'rxjs'

export namespace DIALOGS {
    export type ADD_ROLE_DIALOG_RESULT = {
        cancelled: boolean,
        role_name: string // User input : The role name
    }
    export type ADD_ROLE_DIALOG_DATA = {
        validator: AsyncValidator /** async validator for role_name form field */
    }

    export type ADD_SERVICE_DIALOG_RESULT = {
        cancelled: boolean,
        service: ServiceEntityDenormalized
    }
    export type ADD_SERVICE_DIALOG_DATA = {
        servicesList: Observable<ServiceEntityDenormalized[]>
    }
}