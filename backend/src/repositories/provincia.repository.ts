// import { DefaultCrudRepository, juggler } from "@loopback/repository";
// import { Provincia } from "../models";
// import { inject } from "@loopback/core";
// import mockupProvincias from "../mock-data/mockup-provincias.json"; // Importa el archivo JSON

// export class ProvinciaRepository extends DefaultCrudRepository<
//   Provincia,
//   typeof Provincia.prototype.id
// > {
//   constructor(
//     @inject("datasources.mockupProvinciasDS") dataSource: juggler.DataSource // Usar la fuente de datos mockup
//   ) {
//     super(Provincia, dataSource);
//   }

//   async getMockupData(): Promise<Provincia[]> {
//     // Mapea los campos del archivo JSON al tipo Provincia
//     const provincias: Provincia[] = mockupProvincias.map(
//       (provinciaData: any) => {
//         const provincia = new Provincia();
//         provincia.id = provinciaData.id;
//         provincia.descripcion = provinciaData.descripcion; // Suponiendo que "descripcion" es la propiedad en el modelo Provincia
//         // Mapea otros campos según sea necesario
//         return provincia;
//       }
//     );

//     return provincias;
//   }
// }
