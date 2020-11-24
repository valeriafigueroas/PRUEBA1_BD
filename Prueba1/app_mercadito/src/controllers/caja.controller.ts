import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Caja} from '../models';
import {CajaRepository} from '../repositories';

export class CajaController {
  constructor(
    @repository(CajaRepository)
    public cajaRepository : CajaRepository,
  ) {}

  @post('/cajas', {
    responses: {
      '200': {
        description: 'Caja model instance',
        content: {'application/json': {schema: getModelSchemaRef(Caja)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Caja, {
            title: 'NewCaja',
            
          }),
        },
      },
    })
    caja: Caja,
  ): Promise<Caja> {
    return this.cajaRepository.create(caja);
  }

  @get('/cajas/count', {
    responses: {
      '200': {
        description: 'Caja model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Caja) where?: Where<Caja>,
  ): Promise<Count> {
    return this.cajaRepository.count(where);
  }

  @get('/cajas', {
    responses: {
      '200': {
        description: 'Array of Caja model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Caja, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Caja) filter?: Filter<Caja>,
  ): Promise<Caja[]> {
    return this.cajaRepository.find(filter);
  }

  @patch('/cajas', {
    responses: {
      '200': {
        description: 'Caja PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Caja, {partial: true}),
        },
      },
    })
    caja: Caja,
    @param.where(Caja) where?: Where<Caja>,
  ): Promise<Count> {
    return this.cajaRepository.updateAll(caja, where);
  }

  @get('/cajas/{id}', {
    responses: {
      '200': {
        description: 'Caja model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Caja, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Caja, {exclude: 'where'}) filter?: FilterExcludingWhere<Caja>
  ): Promise<Caja> {
    return this.cajaRepository.findById(id, filter);
  }

  @patch('/cajas/{id}', {
    responses: {
      '204': {
        description: 'Caja PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Caja, {partial: true}),
        },
      },
    })
    caja: Caja,
  ): Promise<void> {
    await this.cajaRepository.updateById(id, caja);
  }

  @put('/cajas/{id}', {
    responses: {
      '204': {
        description: 'Caja PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() caja: Caja,
  ): Promise<void> {
    await this.cajaRepository.replaceById(id, caja);
  }

  @del('/cajas/{id}', {
    responses: {
      '204': {
        description: 'Caja DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cajaRepository.deleteById(id);
  }
}
