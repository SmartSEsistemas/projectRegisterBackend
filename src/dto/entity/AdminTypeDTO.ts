export interface AdminTypeDTO {
  description: string;
  start_date: Date;
  final_date: Date;
  legal_nature_id: number;
  type: "DIRETA" | "INDIRETA";
  power: "EXECUTIVO" | "LEGISLATIVO";
}