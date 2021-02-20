import { AuthenticationRequest } from '@feathersjs/authentication';
export interface ILoginCredentials extends AuthenticationRequest {
    strategy: string,
    email?: string,
    password?: string,
    requestedUrl?: string
}