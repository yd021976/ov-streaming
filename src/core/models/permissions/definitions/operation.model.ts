import { FieldEntityDenormalized } from './field.model'
import { EntityModel } from '@core/models/entity'
import { ServiceEntity, ServiceEntityDenormalized } from './service.model'
import { IPermissionsEntityBase } from './entity-base'
import { ENTITY_STORAGE_MAP } from './entity-refs-storage.map'
import { ALLOWED_STATUS } from './allowed-status.enum'
import { IOperationFilter } from './operation-filter.interface'

abstract class IOperationEntity<T extends FieldEntityDenormalized | string> extends IPermissionsEntityBase<T> {
     /** available operation filters */
     filters: IOperationFilter[]

     
    constructor(parentEntity: ServiceEntityDenormalized | ServiceEntity, allowed_state: ALLOWED_STATUS = ALLOWED_STATUS.FORBIDDEN) {
        super()
        this.type = EntityModel.ENTITY_TYPES.OPERATION
        this.allowed = allowed_state

        this.dependencies_refs = {
            children: { storage_key: ENTITY_STORAGE_MAP.get(EntityModel.ENTITY_TYPES.FIELD) },
            storage_key: ENTITY_STORAGE_MAP.get(EntityModel.ENTITY_TYPES.OPERATION),
            parent: {
                // storage_key: parentEntity !== null ? parentEntity.dependencies_refs.storage_key : null,
                storage_key: ENTITY_STORAGE_MAP.get(EntityModel.ENTITY_TYPES.SERVICE),
                type: EntityModel.ENTITY_TYPES.SERVICE,
                _id: parentEntity !== null ? parentEntity._id : null,
            },
        }
    }
}

export class OperationEntity extends IOperationEntity<string> {
   
}
export class OperationEntityDenormalized extends IOperationEntity<FieldEntityDenormalized> {}
