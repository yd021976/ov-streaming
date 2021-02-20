import { EntityModel } from '@core/models/entity';

export interface IBaseNormlizrResults<N> {
    entities: { [id: string]: N }
    children: { [id: string]: N }
    results: Array<string>
}