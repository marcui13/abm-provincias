import { Entity, model, property } from "@loopback/repository";

@model({ settings: { strict: false } })
export class Provincia extends Entity {
  @property({
    type: "string",
    required: true,
  })
  nombre: string;

  @property({
    type: "string",
    id: true,
    generated: true,
  })
  codigo?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Provincia>) {
    super(data);
  }
}

export interface ProvinciaRelations {
  // describe navigational properties here
}

export type ProvinciaWithRelations = Provincia & ProvinciaRelations;
