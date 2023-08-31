import { repository } from "@loopback/repository";
import { param, get, post, put, del, requestBody } from "@loopback/rest";
// import { CiudadRepository } from "../repositories/ciudad.repository";
import { Ciudad } from "../models";

const MOCK_CIUDADES = {
  ciudades: [
    { id: 1, descripcion: "Ciudad 1", id_provincia: 1 },
    { id: 2, descripcion: "Ciudad 2", id_provincia: 1 },
    { id: 3, descripcion: "Ciudad 3", id_provincia: 2 },
  ],
};

export class CiudadController {
  constructor() // public ciudadRepository: CiudadRepository // @repository(CiudadRepository)
  {}

  @get("/ciudades")
  async getAllCiudades(): Promise<any> {
    // Utiliza los datos mock
    return MOCK_CIUDADES.ciudades;
  }

  @get("/ciudades/{id}")
  async getCiudad(@param.path.number("id") id: number): Promise<any> {
    // Implementa la lógica para obtener una ciudad por su ID (mockup o base de datos)
    // Aquí puedes buscar la ciudad por su ID en los datos mock
    const ciudad = MOCK_CIUDADES.ciudades.find((c) => c.id === id);
    if (ciudad) {
      return ciudad;
    } else {
      // Puedes manejar el caso de que la ciudad no exista
      throw new Error("Ciudad no encontrada");
    }
  }

  @post("/ciudades")
  async createCiudad(@requestBody() ciudad: Ciudad): Promise<Ciudad> {
    // Implementa la lógica para crear una ciudad (mockup o base de datos)
    // Aquí puedes agregar la nueva ciudad a los datos mock
    MOCK_CIUDADES.ciudades.push(ciudad);
    return ciudad;
  }

  @put("/ciudades/{id}")
  async updateCiudad(
    @param.path.number("id") id: number,
    @requestBody() ciudad: Ciudad
  ): Promise<void> {
    // Implementa la lógica para actualizar una ciudad por su ID (mockup o base de datos)
    const index = MOCK_CIUDADES.ciudades.findIndex((c) => c.id === id);
    if (index !== -1) {
      MOCK_CIUDADES.ciudades[index] = ciudad;
    } else {
      // Puedes manejar el caso de que la ciudad no exista
      throw new Error("Ciudad no encontrada");
    }
  }

  @del("/ciudades/{id}")
  async deleteCiudad(@param.path.number("id") id: number): Promise<void> {
    // Implementa la lógica para eliminar una ciudad por su ID (mockup o base de datos)
    const index = MOCK_CIUDADES.ciudades.findIndex((c) => c.id === id);
    if (index !== -1) {
      MOCK_CIUDADES.ciudades.splice(index, 1);
    } else {
      // Puedes manejar el caso de que la ciudad no exista
      throw new Error("Ciudad no encontrada");
    }
  }
}
