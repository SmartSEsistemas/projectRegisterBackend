import { Request, Response } from "express";

export interface PersonController {
  register: (req: Request, res: Response) => any;
  update: (req: Request, res: Response) => any;
  // delete: () => any;
}