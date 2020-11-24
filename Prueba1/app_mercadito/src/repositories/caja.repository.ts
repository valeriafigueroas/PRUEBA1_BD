import {DefaultCrudRepository} from '@loopback/repository';
import {Caja, CajaRelations} from '../models';
import {ConectDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CajaRepository extends DefaultCrudRepository<
  Caja,
  typeof Caja.prototype.id,
  CajaRelations
> {
  constructor(
    @inject('datasources.conect') dataSource: ConectDataSource,
  ) {
    super(Caja, dataSource);
  }
}
