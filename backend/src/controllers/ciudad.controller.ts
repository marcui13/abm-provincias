import { param, get, post, put, del, requestBody } from "@loopback/rest";
import { Ciudad } from "../models";
import { MOCK_CIUDADES } from "../mock-data/mockup-ciudades";

export class CiudadController {
  constructor() {}

  @get("/ciudades")
  async getAllCiudades(): Promise<any> {
    return MOCK_CIUDADES.ciudades;
  }

  @get("/ciudades/{id}")
  async getCiudad(@param.path.number("id") id: number): Promise<any> {
    const ciudad = MOCK_CIUDADES.ciudades.find((c) => c.id === id);
    if (ciudad) {
      return ciudad;
    } else {
      throw new Error("Ciudad no encontrada");
    }
  }

  @post("/ciudades")
  async createCiudad(@requestBody() ciudad: Ciudad): Promise<Ciudad> {
    MOCK_CIUDADES.ciudades.push(ciudad);
    return ciudad;
  }

  @put("/ciudades/{id}")
  async updateCiudad(
    @param.path.number("id") id: number,
    @requestBody() ciudad: Ciudad
  ): Promise<void> {
    const index = MOCK_CIUDADES.ciudades.findIndex((c) => c.id === id);
    if (index !== -1) {
      MOCK_CIUDADES.ciudades[index] = ciudad;
    } else {
      throw new Error("Ciudad no encontrada");
    }
  }

  @del("/ciudades/{id}")
  async deleteCiudad(@param.path.number("id") id: number): Promise<void> {
    const index = MOCK_CIUDADES.ciudades.findIndex((c) => c.id === id);
    if (index !== -1) {
      MOCK_CIUDADES.ciudades.splice(index, 1);
    } else {
      throw new Error("Ciudad no encontrada");
    }
  }
}
