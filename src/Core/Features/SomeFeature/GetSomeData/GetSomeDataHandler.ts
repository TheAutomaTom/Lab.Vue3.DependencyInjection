import type { GetSomeDataRequest } from "./GetSomeDataRequest";
import type { GetSomeDataResult } from "./GetSomeDataResult";
import type { ISomeRepository } from "../../../Interfaces/ISomeRepository";
import type { ISomeStore } from "../SomeStore";

export class GetSomeDataHandler{

  _repo: ISomeRepository;
  _store: ISomeStore;
  
  constructor(repo: ISomeRepository, store: ISomeStore) {
    
    console.log(`GetSomeDataHandler.constructor(repo)`);
    this._repo = repo;
    this._store = store;
    
  }

  handle(request: GetSomeDataRequest): Awaited<Promise<GetSomeDataResult>>{
    console.log(`GetSomeDataHandler.handle`);
    
    const response= this._repo.TryGetSomeData(request);
    this._store.SaveData(response.data);
    return response;

  }
}