import { FeatureBase as ServiceCollectionBase } from "@/Core/Common/FeatureBase";
import type { GetSomeDataHandler } from "@/Core/Features/SomeFeature/GetSomeData/GetSomeDataHandler";
import { useSomeStore, type ISomeStore } from "@/Core/Features/SomeFeature/SomeStore";
import { GetSomeDataRequest } from "./GetSomeData/GetSomeDataRequest";
import type { GetSomeDataResult } from "./GetSomeData/GetSomeDataResult";

export class SomeFeatureCollection extends ServiceCollectionBase<ISomeStore>{
  
  getSomeDataHandler: GetSomeDataHandler;

  constructor({
    getSomeDataHandler    
  }:{
    getSomeDataHandler: GetSomeDataHandler;
  }){
    super(useSomeStore());
    this.getSomeDataHandler = getSomeDataHandler;
    console.log(`SomeFeature.getSomeData`);
  }

  getSomeData = async (request: GetSomeDataRequest): Promise<GetSomeDataResult> => {
    console.log(`SomeFeature.getSomeData`);

    const result = await this.getSomeDataHandler.handle(request);

    return result;

  }

}