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
import {DetalleFac} from '../models';
import {DetalleFacRepository} from '../repositories';

export class DetallefacController {
  constructor(
    @repository(DetalleFacRepository)
    public detalleFacRepository : DetalleFacRepository,
  ) {}

  @post('/detalle-facs', {
    responses: {
      '200': {
        description: 'DetalleFac model instance',
        content: {'application/json': {schema: getModelSchemaRef(DetalleFac)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleFac, {
            title: 'NewDetalleFac',
            
          }),
        },
      },
    })
    detalleFac: DetalleFac,
  ): Promise<DetalleFac> {
    return this.detalleFacRepository.create(detalleFac);
  }

  @get('/detalle-facs/count', {
    responses: {
      '200': {
        description: 'DetalleFac model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(DetalleFac) where?: Where<DetalleFac>,
  ): Promise<Count> {
    return this.detalleFacRepository.count(where);
  }

  @get('/detalle-facs', {
    responses: {
      '200': {
        description: 'Array of DetalleFac model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(DetalleFac, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(DetalleFac) filter?: Filter<DetalleFac>,
  ): Promise<DetalleFac[]> {
    return this.detalleFacRepository.find(filter);
  }

  @patch('/detalle-facs', {
    responses: {
      '200': {
        description: 'DetalleFac PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleFac, {partial: true}),
        },
      },
    })
    detalleFac: DetalleFac,
    @param.where(DetalleFac) where?: Where<DetalleFac>,
  ): Promise<Count> {
    return this.detalleFacRepository.updateAll(detalleFac, where);
  }

  @get('/detalle-facs/{id}', {
    responses: {
      '200': {
        description: 'DetalleFac model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(DetalleFac, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(DetalleFac, {exclude: 'where'}) filter?: FilterExcludingWhere<DetalleFac>
  ): Promise<DetalleFac> {
    return this.detalleFacRepository.findById(id, filter);
  }

  @patch('/detalle-facs/{id}', {
    responses: {
      '204': {
        description: 'DetalleFac PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleFac, {partial: true}),
        },
      },
    })
    detalleFac: DetalleFac,
  ): Promise<void> {
    await this.detalleFacRepository.updateById(id, detalleFac);
  }

  @put('/detalle-facs/{id}', {
    responses: {
      '204': {
        description: 'DetalleFac PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() detalleFac: DetalleFac,
  ): Promise<void> {
    await this.detalleFacRepository.replaceById(id, detalleFac);
  }

  @del('/detalle-facs/{id}', {
    responses: {
      '204': {
        description: 'DetalleFac DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.detalleFacRepository.deleteById(id);
  }
}
