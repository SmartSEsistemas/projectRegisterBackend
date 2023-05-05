import { LegalPersonDTO } from "./LegalPersonDTO";

export interface LegalPersonUpdateDTO {
  person: Partial<Omit<LegalPersonDTO, 'password' | 'cnpj'>>;
  reason: {
    description: string;
    reason: string;
    date: Date;
  }
}