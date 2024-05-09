import type { ISomeRepository } from "./Interfaces/ISomeRepository"
import { SomeRequest } from "./Dtos/SomeRequest";
import { SomeResult } from "./Dtos/SomeResult";
import { defineStore } from "pinia";

export const useSomeState = defineStore("SomeState", () => {
  
  const _repo = {} as ISomeRepository;

  const GetSomeData = (input: string): Awaited<Promise<SomeResult>> =>{
    const request = new SomeRequest(input);
    const result = _repo.TryGetSomeData(request)
    return result;
  }  
  
  return {
    GetSomeData
  }

})
