import { param, get, post, put, del, requestBody } from "@loopback/rest";
import { Provincia } from "../models";
import { MOCK_PROVINCIAS } from "../mock-data/mockup-provincias";
export class ProvinciaController {
  constructor() {}

  @get("/provincias")
  async getAllProvincias(): Promise<any> {
    return MOCK_PROVINCIAS.provincias;
  }

  @get("/provincias/{id}")
  async getProvincia(@param.path.number("id") id: number): Promise<any> {
    const provincia = MOCK_PROVINCIAS.provincias.find((p) => p.id === id);
    if (provincia) {
      return provincia;
    } else {
      throw new Error("Provincia no encontrada");
    }
  }

  @post("/provincias")
  async createProvincia(
    @requestBody() provincia: Provincia
  ): Promise<Provincia> {
    MOCK_PROVINCIAS.provincias.push(provincia);
    return provincia;
  }

  @put("/provincias/{id}")
  async updateProvincia(
    @param.path.number("id") id: number,
    @requestBody() provincia: Provincia
  ): Promise<void> {
    const index = MOCK_PROVINCIAS.provincias.findIndex((p) => p.id === id);
    if (index !== -1) {
      MOCK_PROVINCIAS.provincias[index] = provincia;
    } else {
      throw new Error("Provincia no encontrada");
    }
  }

  @del("/provincias/{id}")
  async deleteProvincia(@param.path.number("id") id: number): Promise<void> {
    const index = MOCK_PROVINCIAS.provincias.findIndex((p) => p.id === id);
    if (index !== -1) {
      MOCK_PROVINCIAS.provincias.splice(index, 1);
    } else {
      throw new Error("Provincia no encontrada");
    }
  }
}
