import { STATE_CHANGE_REASONS } from './state-change-reasons.enum'
/**
 * Connection state class
 */
export class BackendConnectionState {
    public isConnected?: boolean;
    public attemptNumber?: number;
    public connectionError?: any;
    public changeReason?: STATE_CHANGE_REASONS;

    constructor(state?: { isConnected?: boolean, attemptNumber?: number, connectionError?: any, user?: any, changeReason?: string }) {
        Object.assign(this, state);
    }
}