import type { ISomeRepository } from "@/Core/Interfaces/ISomeRepository";
import type { SomeRequest } from "@/Core/Dtos/SomeRequest";
import { SomeResult } from "@/Core/Dtos/SomeResult";

export class SomeRepository implements ISomeRepository{
  
  constructor() {

  }
  TryGetSomeData(request: SomeRequest): SomeResult {
    return new SomeResult(`Requested ${request.input}!`);
  }

  
}