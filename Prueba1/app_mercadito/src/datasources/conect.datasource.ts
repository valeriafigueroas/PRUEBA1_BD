import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'conect',
  connector: 'mssql',
  url: 'mssql://sa:Spshouse123.@DELL7040/Mercadito',
  host: 'DELL7040',
  port: 1433,
  user: 'sa',
  password: 'Spshouse123.',
  database: 'Mercadito'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ConectDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'conect';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.conect', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
