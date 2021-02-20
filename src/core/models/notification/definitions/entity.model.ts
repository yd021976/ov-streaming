import { Types } from './types'

export class Entity {
    uid: string /** unique ID for this notification */
    type: Types /** Notification information level (err,warn,info) */
    name: string /** any technical name or symbol, free to use */
    message: string /** notification message */
    ttl: number = 10000 /** Message time to live in ms */
    create_time: number /** Creation timestamp */

    /**
     * Constructor
     * @param message 
     * @param name 
     * @param type notification type @see ApplicationNotificationType, default is "INFO"
     * @param ttl Duration in ms, default is 10000ms (10s)
     */
    constructor(message: string, name: string, type: Types = Types.INFO, ttl: number = 5000) {
        this.message = message
        this.type = type
        this.name = name
        this.create_time = Date.now()
        this.ttl = ttl
    }
}

