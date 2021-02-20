import { RoleEntity, RoleEntityDenormalized } from './role.model';
import { ServiceEntityDenormalized, ServiceEntity } from './service.model';
import { OperationEntityDenormalized, OperationEntity } from './operation.model';
import { FieldEntity, FieldEntityDenormalized } from './field.model';

export type TAllEntityTypes = RoleEntity | RoleEntityDenormalized | ServiceEntityDenormalized | ServiceEntity | OperationEntityDenormalized | OperationEntity | FieldEntity | FieldEntityDenormalized
export type TNormalizedEntityTypes = RoleEntity | ServiceEntity | OperationEntity | FieldEntity
export type TDenormalizedEntityTypes = RoleEntityDenormalized | ServiceEntityDenormalized | OperationEntityDenormalized | FieldEntityDenormalized