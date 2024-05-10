import { ref } from "vue";
import { defineStore } from "pinia";
export interface ISomeStore {
  // SomeData: typeof ref<string>;
  
  SaveData: (input: string) => void;
  ReadData: () => string;

}

export const useSomeStore = defineStore( "SomeStore", ():ISomeStore => {

  console.log(`SomeStore.defineStore`);
  
  let SomeData = "NO UPDATE YET!";

  const SaveData = (input: string): void =>{
    console.log(`SomeStore.SaveData(${input})`);
    console.log(`useSomeStore.SaveData: BEFORE ${SomeData}`);    
    SomeData = input;    
    console.log(`useSomeStore.SaveData: AFTER ${SomeData}`);
  }

  const ReadData = ():string =>{
    return SomeData;
  }
  
  return {
    ReadData,
    SaveData
  }
})

export default useSomeStore;
export type SomeStore = Omit<
  ReturnType<typeof useSomeStore>,
  keyof ReturnType<typeof defineStore>
>