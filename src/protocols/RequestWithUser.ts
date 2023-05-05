import { Request } from "express";

export interface RequestWithUser extends Request {
  user?: {
    document: string;
    type_person: 'NATURAL' | 'LEGAL';
  }
}