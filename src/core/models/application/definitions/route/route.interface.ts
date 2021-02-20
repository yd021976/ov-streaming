import { Route } from '@angular/router';
import { IRouteData } from './route-data.interface'

export interface IRouteInterface extends Route {
    data: IRouteData;
    children?: IRouteInterface[]
}