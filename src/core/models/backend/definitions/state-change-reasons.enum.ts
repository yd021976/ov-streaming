export enum STATE_CHANGE_REASONS {
    socketIO_Connection_Error,
    socketIO_connection_timeout,
    socketIO_Reconnect_Attempt,
    socketIO_Connected,
    Feathers_Authenticated,
    Feathers_Logout,
    Feathers_reauthentication_error,
    Feathers_Token_Expired
}

