import { NaturalPersonDTO } from "./NaturalPersonDTO";

export interface NaturalPersonUpdateDTO {
  person: Partial<Omit<NaturalPersonDTO, 'password' | 'cpf'>>
  reason: {
    description: string;
    reason: string;
    date: Date;
  }
}