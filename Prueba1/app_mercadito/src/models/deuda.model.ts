import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Deuda'}}})
export class Deuda extends Entity {
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
    type: 'number',
    precision: 10,
    scale: 0,
    mssql: {columnName: 'idCliente', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES'},
  })
  idCliente?: number;

  @property({
    type: 'number',
    required: true,
    precision: 53,
    mssql: {columnName: 'deuda', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'NO'},
  })
  deuda: number;

  @property({
    type: 'date',
    mssql: {columnName: 'f_deuda', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fDeuda?: string;

  @property({
    type: 'number',
    precision: 53,
    mssql: {columnName: 'abonos', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  abonos?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Deuda>) {
    super(data);
  }
}

export interface DeudaRelations {
  // describe navigational properties here
}

export type DeudaWithRelations = Deuda & DeudaRelations;
