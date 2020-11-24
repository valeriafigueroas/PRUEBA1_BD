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
import {TipoPrecios} from '../models';
import {TipoPreciosRepository} from '../repositories';

export class TipoPrecioController {
  constructor(
    @repository(TipoPreciosRepository)
    public tipoPreciosRepository : TipoPreciosRepository,
  ) {}

  @post('/tipo-precios', {
    responses: {
      '200': {
        description: 'TipoPrecios model instance',
        content: {'application/json': {schema: getModelSchemaRef(TipoPrecios)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoPrecios, {
            title: 'NewTipoPrecios',
            
          }),
        },
      },
    })
    tipoPrecios: TipoPrecios,
  ): Promise<TipoPrecios> {
    return this.tipoPreciosRepository.create(tipoPrecios);
  }

  @get('/tipo-precios/count', {
    responses: {
      '200': {
        description: 'TipoPrecios model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(TipoPrecios) where?: Where<TipoPrecios>,
  ): Promise<Count> {
    return this.tipoPreciosRepository.count(where);
  }

  @get('/tipo-precios', {
    responses: {
      '200': {
        description: 'Array of TipoPrecios model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(TipoPrecios, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(TipoPrecios) filter?: Filter<TipoPrecios>,
  ): Promise<TipoPrecios[]> {
    return this.tipoPreciosRepository.find(filter);
  }

  @patch('/tipo-precios', {
    responses: {
      '200': {
        description: 'TipoPrecios PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoPrecios, {partial: true}),
        },
      },
    })
    tipoPrecios: TipoPrecios,
    @param.where(TipoPrecios) where?: Where<TipoPrecios>,
  ): Promise<Count> {
    return this.tipoPreciosRepository.updateAll(tipoPrecios, where);
  }

  @get('/tipo-precios/{id}', {
    responses: {
      '200': {
        description: 'TipoPrecios model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(TipoPrecios, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TipoPrecios, {exclude: 'where'}) filter?: FilterExcludingWhere<TipoPrecios>
  ): Promise<TipoPrecios> {
    return this.tipoPreciosRepository.findById(id, filter);
  }

  @patch('/tipo-precios/{id}', {
    responses: {
      '204': {
        description: 'TipoPrecios PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoPrecios, {partial: true}),
        },
      },
    })
    tipoPrecios: TipoPrecios,
  ): Promise<void> {
    await this.tipoPreciosRepository.updateById(id, tipoPrecios);
  }

  @put('/tipo-precios/{id}', {
    responses: {
      '204': {
        description: 'TipoPrecios PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tipoPrecios: TipoPrecios,
  ): Promise<void> {
    await this.tipoPreciosRepository.replaceById(id, tipoPrecios);
  }

  @del('/tipo-precios/{id}', {
    responses: {
      '204': {
        description: 'TipoPrecios DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tipoPreciosRepository.deleteById(id);
  }
}
