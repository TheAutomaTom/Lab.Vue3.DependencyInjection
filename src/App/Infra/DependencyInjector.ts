import type { SomeStore } from '@/Core/Features/SomeFeature/SomeStore';
import { GetSomeDataHandler } from '../../Core/Features/SomeFeature/GetSomeData/GetSomeDataHandler';
import { SomeFeature } from '../../Core/Features/SomeFeature/SomeFeature';
import { SomeRepository } from '../../Data/SomeRepository';

const ProvideSomeFeatures = (store: SomeStore ) =>{

  console.log(`DependencyInjector.ProvideSomeFeatures`);

  const someRepo = new SomeRepository();
  const getSomeDataUseCase = new GetSomeDataHandler(someRepo);

  return new SomeFeature({
    store,
    getSomeDataUseCase
  })

}

export const DependencyInjector = {
  ProvideSomeFeatures
}