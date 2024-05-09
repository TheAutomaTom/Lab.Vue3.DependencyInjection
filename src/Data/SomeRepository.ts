import type { ISomeRepository } from "@/Core/Interfaces/ISomeRepository";
import type { GetSomeDataRequest } from "@/Core/Features/SomeFeature/GetSomeData/GetSomeDataRequest";
import { GetSomeDataResult } from "@/Core/Features/SomeFeature/GetSomeData/GetSomeDataResult";

export class SomeRepository implements ISomeRepository{
  
  constructor() {
    console.log(`SomeRepository.constructor`);

  }
  TryGetSomeData(request: GetSomeDataRequest): GetSomeDataResult {
    console.log(`SomeRepository.TryGetSomeData`);
    
    const chars = request.input.split("");
    chars.reverse();
    const result = chars.join("");
    return new GetSomeDataResult(result)

  }

  
}