import type { ISomeRepository } from "../../Interfaces/ISomeRepository"
import { GetSomeDataRequest } from "./GetSomeData/GetSomeDataRequest";
import { GetSomeDataResult } from "./GetSomeData/GetSomeDataResult";
import { defineStore } from "pinia";


interface State{
  GetSomeData: (input: string) => Awaited<Promise<GetSomeDataResult>>;
}

export const useSomeState = defineStore( "SomeState", ():State => {

  console.log(`SomeStore.defineStore`);
  
  const _repo = {} as ISomeRepository;

  const GetSomeData = (input: string): Awaited<Promise<GetSomeDataResult>> =>{
    
    console.log(`SomeStore.GetSomeData: ${input}`);

    const request = new GetSomeDataRequest(input);
    const result = _repo.TryGetSomeData(request)
    return result;
  }  
  
  return {
    GetSomeData
  }

})

export default useSomeState;
export type SomeStore = Omit<
  ReturnType<typeof useSomeState>,
  keyof ReturnType<typeof defineStore>
>