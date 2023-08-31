import { repository } from "@loopback/repository";
import { param, get, post, put, del, requestBody } from "@loopback/rest";
import { ProvinciaRepository } from "../repositories/provincia.repository";
import { Provincia } from "../models";

export class ProvinciaController {
  constructor(
    @repository(ProvinciaRepository)
    public provinciaRepository: ProvinciaRepository
  ) {}

  @get("/provincias")
  async getAllProvincias(): Promise<any> {
    return this.provinciaRepository.find();
  }

  @get("/provincias/{id}")
  async getProvincia(@param.path.number("id") id: number): Promise<any> {
    return this.provinciaRepository.findById(id);
  }

  @post("/provincias")
  async createProvincia(@requestBody() provincia: Provincia): Promise<any> {
    return this.provinciaRepository.create(provincia);
  }

  @put("/provincias/{id}")
  async updateProvincia(
    @param.path.number("id") id: number,
    @requestBody() provincia: Provincia
  ): Promise<any> {
    await this.provinciaRepository.updateById(id, provincia);
  }

  @del("/provincias/{id}")
  async deleteProvincia(@param.path.number("id") id: number): Promise<any> {
    await this.provinciaRepository.deleteById(id);
  }
}
