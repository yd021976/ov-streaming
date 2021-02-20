import { IFlatTreeNodeType } from './tree-node.type'
import { TreeModel } from '@core/models/tree';
export enum TREE_ACTIONS {
    ADD_ROLE = 'add role',
    REMOVE_ROLE = 'remove role',

    ADD_SERVICE = 'add service',
    REMOVE_SERVICE = 'remove service',

    LOCK = 'lock',
    UNLOCK = 'unlock',
}

/**
 *
 */
export interface ITreeAction extends TreeModel.ITreeAction {
    node: IFlatTreeNodeType /** the node the action relies on */
    action: TREE_ACTIONS /** the click action type */
}
