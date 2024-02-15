declare const _default: {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    synchronize: boolean;
    dropSchema: boolean;
    logging: boolean;
    retryAttempts: number;
    keepConnectionAlive: boolean;
    entities: string[];
    migrations: string[];
    subscribers: string[];
    cli: {
        entitiesDir: string;
        migrationsDir: string;
        subscribersDir: string;
    };
};
export default _default;
