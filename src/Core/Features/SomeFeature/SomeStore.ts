import type { ISomeRepository } from "../../Interfaces/ISomeRepository"
// import { GetSomeDataRequest } from "./GetSomeData/GetSomeDataRequest";
// import { GetSomeDataResult } from "./GetSomeData/GetSomeDataResult";
import { defineStore } from "pinia";

interface State{
  // GetSomeData: (input: string) => Awaited<Promise<GetSomeDataResult>>;
  // LogInit: () => void;
  Repo : ISomeRepository;
}

export const useSomeStore = defineStore( "SomeState", ():State => {

  console.log(`SomeStore.defineStore`);
  
  const Repo = {} as ISomeRepository;

  // const LogInit = (): void =>{
  //   console.log(`SomeStore.LogInit`)
  // };


  // const GetSomeData = (input: string): Awaited<Promise<GetSomeDataResult>> =>{
    
  //   console.log(`SomeStore.GetSomeData: ${input}`);

  //   const request = new GetSomeDataRequest(input);
  //   const result = _repo.TryGetSomeData(request)
  //   return result;
  // }  
  
  return {
    Repo
    }
  }
)

export default useSomeStore;
export type SomeStore = Omit<
  ReturnType<typeof useSomeStore>,
  keyof ReturnType<typeof defineStore>
>