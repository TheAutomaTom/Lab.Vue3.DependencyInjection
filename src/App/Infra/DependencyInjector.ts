import { useSomeStore } from '@/Core/Features/SomeFeature/SomeStore';
import { GetSomeDataHandler } from '../../Core/Features/SomeFeature/GetSomeData/GetSomeDataHandler';
import { SomeFeature } from '../../Core/Features/SomeFeature/SomeFeature';
import { SomeRepository } from '../../Data/SomeRepository';

const ProvideSomeFeatures = () =>{

  console.log(`DependencyInjector.ProvideSomeFeatures`);

  /*
    NOTE ABOUT const store = useSomeStore();
    This could be sent in the constructor if these handlers were used in combination with other ViewModels.  
  */
  const store = useSomeStore();

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