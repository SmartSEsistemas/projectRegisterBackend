import { ReasonDTO } from "../../ReasonDTO";
import { LegalPersonDTO } from "./LegalPersonDTO";

export interface LegalPersonUpdateDTO {
  person: Partial<Omit<LegalPersonDTO, 'password' | 'cnpj'>>;
  reason: ReasonDTO
}