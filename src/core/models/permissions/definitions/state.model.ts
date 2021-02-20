import { EntityModel } from '@core/models/entity';
import { IFlatTreeNodeType } from './tree-node.type';
import { PermissionModel } from '..';
import { TNormalizedEntityTypes } from './entities-types.type';
import { ApplicationModel } from '@core/models/application';

/**
 * state entities is an indexed class : key=>Entities
 */
export interface IPermissionsStateEntities extends EntityModel.IBaseEntityList<TNormalizedEntityTypes>{}

/**
 * 
 */
export interface IPermissionsState extends ApplicationModel.IBaseStateWithEntities<TNormalizedEntityTypes>{
    selectedNode: IFlatTreeNodeType
    availableBackendServices: PermissionModel.ServiceEntityDenormalized[]
}