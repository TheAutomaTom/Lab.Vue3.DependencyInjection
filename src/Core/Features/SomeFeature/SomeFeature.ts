import { FeatureBase } from "@/Core/Common/FeatureBase";
import type { GetSomeDataHandler } from "@/Core/Features/SomeFeature/GetSomeData/GetSomeDataHandler";
import type { SomeStore } from "@/Core/Features/SomeFeature/SomeStore";
import { GetSomeDataRequest } from "./GetSomeData/GetSomeDataRequest";
import type { GetSomeDataResult } from "./GetSomeData/GetSomeDataResult";
import { DependencyInjector } from "@/App/Infra/DependencyInjector";

export class SomeFeature extends FeatureBase<SomeStore>{
  
  getSomeDataUseCase: GetSomeDataHandler;

  constructor({
    store,
    getSomeDataUseCase    
  }:{
    store: SomeStore;
    getSomeDataUseCase: GetSomeDataHandler;
  }){
    super(store);
    this.getSomeDataUseCase = getSomeDataUseCase;
  }

  getSomeData = async (request: GetSomeDataRequest): Promise<GetSomeDataResult> => {

    const failureOrSuccess = await this.getSomeDataUseCase.handle(request);

    return failureOrSuccess;

  }

}