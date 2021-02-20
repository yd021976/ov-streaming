import { IPermissionsEntityBase } from './entity-base';
import { TAllEntityTypes } from './entities-types.type';
import { TreeModel } from '@core/models/tree';


export interface ITreeNodeType<T extends TAllEntityTypes = TAllEntityTypes> extends IPermissionsEntityBase<T> { }
export interface IFlatTreeNodeType extends TreeModel.IFlatNodeType<IPermissionsEntityBase<string>> {}