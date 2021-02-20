import { AppLoggerConfig } from './config.class'
import { Level } from './levels.enum'
import { IAppLoggerAdapterBase } from '@core/services/logger/service/app-logger-adapter-base.class'
import { AppLoggerAdapter } from '@core/services/logger/logger/app-logger-adapter'
/**
 * Type for creating app logger adapter
 * @see AppLoggerAdapterBase
 */
export type TloggerAdapterType<T extends IAppLoggerAdapterBase = AppLoggerAdapter> = {
    new(
        name: string,
        color: string,
        developmentMode: boolean,
        allowed: Level[],
        isMuted: boolean,
        fixedWidth: number | undefined,
        config: AppLoggerConfig
    ): T
}