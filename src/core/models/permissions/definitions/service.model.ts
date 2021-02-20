import { OperationEntityDenormalized } from './operation.model'
import { EntityModel } from '@core/models/entity'
import { RoleEntity, RoleEntityDenormalized } from './role.model'
import { IPermissionsEntityBase } from './entity-base'
import { ENTITY_STORAGE_MAP } from './entity-refs-storage.map'

/** Service base abstract class */
abstract class IServiceEntity<T extends OperationEntityDenormalized | string> extends IPermissionsEntityBase<T> {
    constructor(parentEntity: RoleEntity | RoleEntityDenormalized) {
        super()
        this.type = EntityModel.ENTITY_TYPES.SERVICE
        this.allowed = null

        this.dependencies_refs = {
            children: { storage_key: ENTITY_STORAGE_MAP.get(EntityModel.ENTITY_TYPES.OPERATION) },
            storage_key: ENTITY_STORAGE_MAP.get(EntityModel.ENTITY_TYPES.SERVICE),
            parent: {
                // storage_key: parentEntity !== null ? parentEntity.dependencies_refs.storage_key : null,
                storage_key: ENTITY_STORAGE_MAP.get(EntityModel.ENTITY_TYPES.ROLE),
                type: EntityModel.ENTITY_TYPES.ROLE,
                _id: parentEntity !== null ? parentEntity._id : null,
            },
        }
    }
}
export class ServiceEntity extends IServiceEntity<string> {}
export class ServiceEntityDenormalized extends IServiceEntity<OperationEntityDenormalized> {}
