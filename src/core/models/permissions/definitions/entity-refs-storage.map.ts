import { EntityModel } from '@core/models/entity';

export const ENTITY_STORAGE_MAP = new Map<string, string>(
    [
        [EntityModel.ENTITY_TYPES.FIELD, 'children'],
        [EntityModel.ENTITY_TYPES.OPERATION, 'children'],
        [EntityModel.ENTITY_TYPES.SERVICE, 'children'],
        [EntityModel.ENTITY_TYPES.ROLE, 'permissions'],
    ]
)