import { TreeModel } from '@core/models/tree';

export interface IBaseButtonAction {
    node?:TreeModel.IFlatNodeType /** used for tree node actions */
    action:any /** action name : Should be mapped to an enum in subclasses */
}