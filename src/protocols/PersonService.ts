export interface PersonService2<C, U> {
  create: (body: C) => Promise<any>;
  update: (body: U) => Promise<any>
}

export abstract class PersonService {
  abstract create<T, R>(body: T): R
}