import { UserModel } from "@core/models/user";

export interface IOVStreamingCast {
    _id?:string
    owner: UserModel.IUser
    name: string
    description: string
    country: string
    startDate: Date
    endDate: Date
}

export interface IOVStreamingCastEntities {
    [key: string]: IOVStreamingCast
}