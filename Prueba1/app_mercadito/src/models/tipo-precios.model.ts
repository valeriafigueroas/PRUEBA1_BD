import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'TipoPrecios'}}})
export class TipoPrecios extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  id: number;

  @property({
    type: 'string',
    length: 20,
    mssql: {columnName: 'tipoPrecio', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  tipoPrecio?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TipoPrecios>) {
    super(data);
  }
}

export interface TipoPreciosRelations {
  // describe navigational properties here
}

export type TipoPreciosWithRelations = TipoPrecios & TipoPreciosRelations;
