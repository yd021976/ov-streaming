import { EntityModel } from '@core/models/entity'

export interface IBaseState {
    isProgress: boolean
}

export interface IBaseStateWithEntities<ENTITIES_TYPES> extends IBaseState {
    entities: EntityModel.IBaseEntityList<ENTITIES_TYPES>
}
