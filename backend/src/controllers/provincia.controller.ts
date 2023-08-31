import { repository } from "@loopback/repository";
import { param, get, post, put, del, requestBody } from "@loopback/rest";
// import { ProvinciaRepository } from "../repositories/provincia.repository";
import { Provincia } from "../models";

const MOCK_PROVINCIAS = {
  provincias: [
    { id: 1, descripcion: "Provincia 1" },
    { id: 2, descripcion: "Provincia 2" },
    { id: 3, descripcion: "Provincia 3" },
  ],
};

export class ProvinciaController {
  constructor() // @repository(ProvinciaRepository)
  // public provinciaRepository: ProvinciaRepository
  {}

  @get("/provincias")
  async getAllProvincias(): Promise<any> {
    // Utiliza los datos mock
    return MOCK_PROVINCIAS.provincias;
  }

  @get("/provincias/{id}")
  async getProvincia(@param.path.number("id") id: number): Promise<any> {
    // Implementa la lógica para obtener una provincia por su ID (mockup o base de datos)
    // Aquí puedes buscar la provincia por su ID en los datos mock
    const provincia = MOCK_PROVINCIAS.provincias.find((p) => p.id === id);
    if (provincia) {
      return provincia;
    } else {
      // Puedes manejar el caso de que la provincia no exista
      throw new Error("Provincia no encontrada");
    }
  }

  @post("/provincias")
  async createProvincia(
    @requestBody() provincia: Provincia
  ): Promise<Provincia> {
    // Implementa la lógica para crear una provincia (mockup o base de datos)
    // Aquí puedes agregar la nueva provincia a los datos mock
    MOCK_PROVINCIAS.provincias.push(provincia);
    return provincia;
  }

  @put("/provincias/{id}")
  async updateProvincia(
    @param.path.number("id") id: number,
    @requestBody() provincia: Provincia
  ): Promise<void> {
    // Implementa la lógica para actualizar una provincia por su ID (mockup o base de datos)
    const index = MOCK_PROVINCIAS.provincias.findIndex((p) => p.id === id);
    if (index !== -1) {
      MOCK_PROVINCIAS.provincias[index] = provincia;
    } else {
      // Puedes manejar el caso de que la provincia no exista
      throw new Error("Provincia no encontrada");
    }
  }

  @del("/provincias/{id}")
  async deleteProvincia(@param.path.number("id") id: number): Promise<void> {
    // Implementa la lógica para eliminar una provincia por su ID (mockup o base de datos)
    const index = MOCK_PROVINCIAS.provincias.findIndex((p) => p.id === id);
    if (index !== -1) {
      MOCK_PROVINCIAS.provincias.splice(index, 1);
    } else {
      // Puedes manejar el caso de que la provincia no exista
      throw new Error("Provincia no encontrada");
    }
  }
}
