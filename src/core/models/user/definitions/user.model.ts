export abstract class IUser {
    _id: string
    name: string
    email: string
    password: string
    roles: string[] /** list of role id's */
    settings: any /** TODO Implement application user settings */
}