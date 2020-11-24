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
import {Deuda} from '../models';
import {DeudaRepository} from '../repositories';

export class DeudaController {
  constructor(
    @repository(DeudaRepository)
    public deudaRepository : DeudaRepository,
  ) {}

  @post('/deudas', {
    responses: {
      '200': {
        description: 'Deuda model instance',
        content: {'application/json': {schema: getModelSchemaRef(Deuda)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Deuda, {
            title: 'NewDeuda',
            
          }),
        },
      },
    })
    deuda: Deuda,
  ): Promise<Deuda> {
    return this.deudaRepository.create(deuda);
  }

  @get('/deudas/count', {
    responses: {
      '200': {
        description: 'Deuda model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Deuda) where?: Where<Deuda>,
  ): Promise<Count> {
    return this.deudaRepository.count(where);
  }

  @get('/deudas', {
    responses: {
      '200': {
        description: 'Array of Deuda model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Deuda, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Deuda) filter?: Filter<Deuda>,
  ): Promise<Deuda[]> {
    return this.deudaRepository.find(filter);
  }

  @patch('/deudas', {
    responses: {
      '200': {
        description: 'Deuda PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Deuda, {partial: true}),
        },
      },
    })
    deuda: Deuda,
    @param.where(Deuda) where?: Where<Deuda>,
  ): Promise<Count> {
    return this.deudaRepository.updateAll(deuda, where);
  }

  @get('/deudas/{id}', {
    responses: {
      '200': {
        description: 'Deuda model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Deuda, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Deuda, {exclude: 'where'}) filter?: FilterExcludingWhere<Deuda>
  ): Promise<Deuda> {
    return this.deudaRepository.findById(id, filter);
  }

  @patch('/deudas/{id}', {
    responses: {
      '204': {
        description: 'Deuda PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Deuda, {partial: true}),
        },
      },
    })
    deuda: Deuda,
  ): Promise<void> {
    await this.deudaRepository.updateById(id, deuda);
  }

  @put('/deudas/{id}', {
    responses: {
      '204': {
        description: 'Deuda PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() deuda: Deuda,
  ): Promise<void> {
    await this.deudaRepository.replaceById(id, deuda);
  }

  @del('/deudas/{id}', {
    responses: {
      '204': {
        description: 'Deuda DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.deudaRepository.deleteById(id);
  }
}
