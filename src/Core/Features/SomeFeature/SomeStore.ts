import { ref } from "vue";
import { defineStore } from "pinia";

export interface ISomeStore{
  SaveData: (input: string) => void;

}

export const useSomeStore = defineStore( "SomeStore", ():ISomeStore => {

  console.log(`SomeStore.defineStore`);
  
  const SomeData = ref("");

  const SaveData = (input: string): void =>{
    SomeData.value = input;
  }
  
  return {
    SaveData
    }
})

export default useSomeStore;
export type SomeStore = Omit<
  ReturnType<typeof useSomeStore>,
  keyof ReturnType<typeof defineStore>
>