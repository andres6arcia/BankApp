import { join } from 'node:path';
import { DataSource, DataSourceOptions } from 'typeorm';

const TypeORMPostgresConfigMigrations: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'dev_admin',
    password: 'secret',
    database: 'bankapp',
    entities: [__dirname + '/../entities/**/*.entity.{ts,js}'],
    synchronize: false,
    migrationsRun: true,
    migrations: [join(process.cwd(), 'src', 'migrations', '*.{ts,js}')],
    logging: true,
    migrationsTableName: 'migrations',
    dropSchema: true,
};

const datasource = new DataSource(TypeORMPostgresConfigMigrations);
export default datasource;