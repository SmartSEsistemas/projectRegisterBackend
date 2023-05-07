import { ReasonDTO } from "../../ReasonDTO";
import { NaturalPersonDTO } from "./NaturalPersonDTO";

export interface NaturalPersonUpdateDTO {
  person: Partial<Omit<NaturalPersonDTO, 'password' | 'cpf'>>
  reason: ReasonDTO
}