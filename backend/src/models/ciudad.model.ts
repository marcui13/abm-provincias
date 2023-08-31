import { Entity, model, property } from "@loopback/repository";

@model({ settings: { strict: false } })
export class Ciudad extends Entity {
  @property({
    type: "number",
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: "string",
    required: true,
  })
  descripcion: string;

  @property({
    type: "number",
    required: true,
  })
  id_provincia: number;

  constructor(data?: Partial<Ciudad>) {
    super(data);
  }
}

export interface CiudadRelations {
  // describe navigational properties here
}

export type CiudadWithRelations = Ciudad & CiudadRelations;
