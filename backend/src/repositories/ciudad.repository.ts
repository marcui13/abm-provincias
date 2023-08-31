// import { DefaultCrudRepository, juggler } from "@loopback/repository";
// import { Ciudad } from "../models";
// import { inject } from "@loopback/core";
// import mockupCiudades from "../mock-data/mockup-ciudades.json";

// export class CiudadRepository extends DefaultCrudRepository<
//   Ciudad,
//   typeof Ciudad.prototype.id
// > {
//   constructor(
//     @inject("datasources.mockupCiuadesDS") dataSource: juggler.DataSource
//   ) {
//     super(Ciudad, dataSource);
//   }

//   async getMockupData(): Promise<Ciudad[]> {
//     // Mapea los campos del archivo JSON al tipo Ciudad
//     const ciudades: Ciudad[] = mockupCiudades.map((ciudadData: any) => {
//       const ciudad = new Ciudad();
//       ciudad.id = ciudadData.id;
//       ciudad.descripcion = ciudadData.descripcion; // Suponiendo que "nombre" es la propiedad en el modelo Ciudad
//       // Mapea otros campos según sea necesario
//       return ciudad;
//     });

//     return ciudades;
//   }
// }
