import { Level } from './levels.enum'
import { TloggerAdapterType } from './adapter.type'
/**
 * Base config class for logger service properties
 */
export abstract class AppLoggerConfigBase {
    // Main logger instance (i.e Service logger)
    isDeveloppementMode: boolean;
    logLevels: Level[];
}

/**
 * Logger config class
 */
export abstract class AppLoggerConfig extends AppLoggerConfigBase {
    color: string;
    mute: boolean;
    fixedWidth: number;
    loggerConfig?: any; // Permit to set any config object for implemented logger if needed
}

export abstract class AppLoggerServiceConfig {
    /**
     * Logger adapter class to use when creating new logger
     */
    public loggerAdapter: TloggerAdapterType;
    /**
     * Array of logger instances name to show (empty = all modules)
     */
    public onlyLoggers: Array<string>;
    /**
     * Service configuration
     */
    public serviceConfig: AppLoggerConfigBase;
    /**
     * config for new logger instances
     */
    public defaultLoggerConfig: AppLoggerConfig;
}