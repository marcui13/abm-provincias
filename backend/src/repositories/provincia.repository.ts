import { DefaultCrudRepository, juggler } from "@loopback/repository";
import { Provincia } from "../models";
import { inject } from "@loopback/core";

export class ProvinciaRepository extends DefaultCrudRepository<
  Provincia,
  typeof Provincia.prototype.id
> {
  constructor(
    @inject("datasources.mockupDS") dataSource: juggler.DataSource // Usar la fuente de datos mockup
  ) {
    super(Provincia, dataSource);
  }
}
