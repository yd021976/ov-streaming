export enum AUTH_EVENT_TYPES {
    NOEVENT = '[auth] no_event',
    LOGOUT = '[auth] logout',
    LOGIN = '[auth] login',
    EXPIRED = '[auth] expired',
    REAUTHENTICATED = '[auth] reauthenticated',
    REAUTHENTICATE_ERROR = '[auth] reauthenticate_error',
}