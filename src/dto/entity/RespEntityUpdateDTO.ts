import { ReasonDTO } from "../ReasonDTO";
import { RespEntityDTO } from "./RespEntityDTO";

export interface RespEntityUpdateDTO {
  resp_entity_id: number;
  resp_entity: Partial<RespEntityDTO>;
  reason: ReasonDTO;
}