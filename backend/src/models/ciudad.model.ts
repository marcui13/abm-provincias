import { Entity, model, property } from "@loopback/repository";

@model({ settings: { strict: false } })
export class Ciudad extends Entity {
  @property({
    type: "string",
    required: true,
  })
  nombre: string;

  @property({
    type: "string",
    required: true,
  })
  id_provincia: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Ciudad>) {
    super(data);
  }
}

export interface CiudadRelations {
  // describe navigational properties here
}

export type CiudadWithRelations = Ciudad & CiudadRelations;
