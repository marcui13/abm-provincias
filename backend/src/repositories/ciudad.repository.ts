import { DefaultCrudRepository, juggler } from "@loopback/repository";
import { Ciudad } from "../models";
import { inject } from "@loopback/core";

export class CiudadRepository extends DefaultCrudRepository<
  Ciudad,
  typeof Ciudad.prototype.id
> {
  constructor(
    @inject("datasources.mockupDS") dataSource: juggler.DataSource // Usar la fuente de datos mockup
  ) {
    super(Ciudad, dataSource);
  }
}
