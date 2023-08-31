import { repository } from '@loopback/repository';
import { param, get, post, put, del, requestBody } from '@loopback/rest';
import { CiudadRepository } from '../repositories/ciudad.repository';
import { Ciudad } from '../models';

export class CiudadController {
  constructor(
    @repository(CiudadRepository)
    public ciudadRepository: CiudadRepository,
  ) {}

  @get('/ciudades')
  async getAllCiudades(): Promise<any> {
    return this.ciudadRepository.find();
  }

  @get('/ciudades/{id}')
  async getCiudad(@param.path.number('id') id: number): Promise<any> {
    return this.ciudadRepository.findById(id);
  }

  @post('/ciudades')
  async createCiudad(@requestBody() ciudad: Ciudad): Promise<any> {
    return this.ciudadRepository.create(ciudad);
  }

  @put('/ciudades/{id}')
  async updateCiudad(
    @param.path.number('id') id: number,
    @requestBody() ciudad: Ciudad,
  ): Promise<any> {
    await this.ciudadRepository.updateById(id, ciudad);
  }

  @del('/ciudades/{id}')
  async deleteCiudad(@param.path.number('id') id: number): Promise<any> {
    await this.ciudadRepository.deleteById(id);
  }
}
