import type { SomeRequest } from "../Dtos/SomeRequest";
import type { SomeResult } from "../Dtos/SomeResult";

export interface ISomeRepository{
  TryGetSomeData(request: SomeRequest): Awaited<Promise<SomeResult>>;

}
