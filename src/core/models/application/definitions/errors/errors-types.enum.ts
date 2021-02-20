export enum ERROR_TYPES {
    NOT_AUTHENTICATED = '[application] not_authenticated',
    INVALID_LOGIN = '[application] invalid_login',
    REAUTHENTICATE = '[application] reauthenticate',
    LOGOUT = "[application] logout",
    /** service errors */
    BACKEND_SERVICES_ERROR ='[application] backend_services_error',
}