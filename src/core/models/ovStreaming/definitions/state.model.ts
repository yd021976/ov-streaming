import { ApplicationModel } from '@core/models/application';
import { IOVStreamingCastEntities } from './streaming.class';

export interface IOVStreamingSateModel extends ApplicationModel.IBaseState {
    entities:IOVStreamingCastEntities
}