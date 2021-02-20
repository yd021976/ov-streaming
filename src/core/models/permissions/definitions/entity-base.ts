import { EntityModel } from '@core/models/entity'
import { ALLOWED_STATUS } from './allowed-status.enum'

export abstract class IPermissionsEntityBase<T extends EntityModel.TChildrenEntity> extends EntityModel.IEntityBase<T> {
    allowed?: ALLOWED_STATUS
}
