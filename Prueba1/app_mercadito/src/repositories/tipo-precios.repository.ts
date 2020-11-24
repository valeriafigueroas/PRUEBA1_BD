import {DefaultCrudRepository} from '@loopback/repository';
import {TipoPrecios, TipoPreciosRelations} from '../models';
import {ConectDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TipoPreciosRepository extends DefaultCrudRepository<
  TipoPrecios,
  typeof TipoPrecios.prototype.id,
  TipoPreciosRelations
> {
  constructor(
    @inject('datasources.conect') dataSource: ConectDataSource,
  ) {
    super(TipoPrecios, dataSource);
  }
}
