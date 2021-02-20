import { EntityModel } from '@core/models/entity'
import { OperationEntity, OperationEntityDenormalized } from './operation.model'
import { IPermissionsEntityBase } from './entity-base'
import { ENTITY_STORAGE_MAP } from './entity-refs-storage.map'
import { ALLOWED_STATUS } from './allowed-status.enum'

abstract class IFieldEntity<T extends string | FieldEntityDenormalized> extends IPermissionsEntityBase<T> {
    constructor(
        parentEntity: OperationEntity | OperationEntityDenormalized | FieldEntityDenormalized | FieldEntity,
        allowed_state: ALLOWED_STATUS = ALLOWED_STATUS.FORBIDDEN
    ) {
        super()
        this.type = EntityModel.ENTITY_TYPES.FIELD
        this.allowed = allowed_state /** default allowed state */

        this.dependencies_refs = {
            children: { storage_key: ENTITY_STORAGE_MAP.get(EntityModel.ENTITY_TYPES.FIELD) },
            storage_key: ENTITY_STORAGE_MAP.get(EntityModel.ENTITY_TYPES.FIELD),

            /**IMPORTANT As field parent can be either OPERATION or FIELD, we need the parent entity to initialize this property */
            parent: {
                storage_key: parentEntity !== null ? parentEntity.dependencies_refs.storage_key : null,
                type: parentEntity !== null ? parentEntity.type : null,
                _id: parentEntity !== null ? parentEntity._id : null,
            },
        }
    }
}

export class FieldEntity extends IFieldEntity<string> {}
export class FieldEntityDenormalized extends IFieldEntity<FieldEntityDenormalized> {}
