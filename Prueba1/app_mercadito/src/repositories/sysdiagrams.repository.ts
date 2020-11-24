import {DefaultCrudRepository} from '@loopback/repository';
import {Sysdiagrams, SysdiagramsRelations} from '../models';
import {ConectDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SysdiagramsRepository extends DefaultCrudRepository<
  Sysdiagrams,
  typeof Sysdiagrams.prototype.diagramId,
  SysdiagramsRelations
> {
  constructor(
    @inject('datasources.conect') dataSource: ConectDataSource,
  ) {
    super(Sysdiagrams, dataSource);
  }
}
