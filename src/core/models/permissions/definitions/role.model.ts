import { EntityModel } from '@core/models/entity';
import { ServiceEntityDenormalized } from './service.model'
import { IPermissionsEntityBase } from './entity-base';
import { v4 as uuid } from 'uuid';
import { ENTITY_STORAGE_MAP } from './entity-refs-storage.map';

/**
 * Base Role abstract class
 */
abstract class IRoleEntity<T extends ServiceEntityDenormalized | string> extends IPermissionsEntityBase<T> {
    constructor(role_name: string = '') {
        super()

        this.name = role_name
        this._id = uuid()
        this.children = []

        this.type = EntityModel.ENTITY_TYPES.ROLE
        this.allowed = null

        this.dependencies_refs = {
            children: { storage_key: ENTITY_STORAGE_MAP.get(EntityModel.ENTITY_TYPES.SERVICE) },
            storage_key: ENTITY_STORAGE_MAP.get(EntityModel.ENTITY_TYPES.ROLE),
            parent: null
        }
    }
}

export class RoleEntity extends IRoleEntity<string> { }
export class RoleEntityDenormalized extends IRoleEntity<ServiceEntityDenormalized> { }