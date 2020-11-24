import {DefaultCrudRepository} from '@loopback/repository';
import {Deuda, DeudaRelations} from '../models';
import {ConectDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DeudaRepository extends DefaultCrudRepository<
  Deuda,
  typeof Deuda.prototype.id,
  DeudaRelations
> {
  constructor(
    @inject('datasources.conect') dataSource: ConectDataSource,
  ) {
    super(Deuda, dataSource);
  }
}
