import {ERROR_TYPES} from './errors-types.enum'
export class Error {
    constructor (public message, public type:ERROR_TYPES, public source?:string) {}
}