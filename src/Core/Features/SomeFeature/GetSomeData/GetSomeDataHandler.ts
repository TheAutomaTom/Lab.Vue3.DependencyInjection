import type { GetSomeDataRequest } from "./GetSomeDataRequest";
import type { GetSomeDataResult } from "./GetSomeDataResult";
import type { ISomeRepository } from "../../../Interfaces/ISomeRepository";

export class GetSomeDataHandler{

  _repo: ISomeRepository;
  
  constructor(repo: ISomeRepository) {
    
    console.log(`GetSomeDataHandler.constructor(repo)`);
    this._repo = repo;
    
  }

  handle(request: GetSomeDataRequest): Awaited<Promise<GetSomeDataResult>>{
    console.log(`GetSomeDataHandler.handle`);
    
    return this._repo.TryGetSomeData(request);
  }
}