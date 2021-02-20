import { TreeModel } from '@core/models/tree';
import { ApplicationModel } from '@core/models/application';
export enum USER_ACTIONS {
    ADD_USER = 'add user',
    REMOVE_USER = 'remove user',

    LOCK = 'lock',
    UNLOCK = 'unlock',
}

/**
 *
 */
export interface IUserActions extends ApplicationModel.IBaseButtonAction {
    action: USER_ACTIONS /** the click action type */
}
