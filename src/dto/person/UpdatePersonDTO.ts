import { PersonDTO } from "./PersonDTO";
import { RegisterPersonDTO, Type_person } from "./RegisterPersonDTO";

export interface UpdatePersonDTO {
  document: string;
  type_person: Type_person;
  data: Partial<PersonDTO>;
}