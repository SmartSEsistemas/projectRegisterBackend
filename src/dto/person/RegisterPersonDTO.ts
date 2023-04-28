import { PersonDTO } from "./PersonDTO";

export type Type_person = 'NATURAL' | 'LEGAL';

export interface RegisterPersonDTO extends PersonDTO {
  document: string;
  type_person: Type_person;
}