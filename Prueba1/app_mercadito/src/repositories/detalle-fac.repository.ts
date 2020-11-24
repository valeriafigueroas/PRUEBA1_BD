import {DefaultCrudRepository} from '@loopback/repository';
import {DetalleFac, DetalleFacRelations} from '../models';
import {ConectDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DetalleFacRepository extends DefaultCrudRepository<
  DetalleFac,
  typeof DetalleFac.prototype.id,
  DetalleFacRelations
> {
  constructor(
    @inject('datasources.conect') dataSource: ConectDataSource,
  ) {
    super(DetalleFac, dataSource);
  }
}
