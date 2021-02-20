import { TNormalizedEntityTypes } from './entities-types.type';
import { NormalizrBase } from '@core/models/normalized-base';

export interface NormlizrResults extends NormalizrBase.IBaseNormlizrResults<TNormalizedEntityTypes>{
    entities: { [id: string]: TNormalizedEntityTypes }
    children:{ [id: string]: TNormalizedEntityTypes }
    results: Array<string>
}