import useSomeStore from '@/Core/Features/SomeFeature/SomeStore';
import { GetSomeDataHandler } from '../../Core/Features/SomeFeature/GetSomeData/GetSomeDataHandler';
import { SomeFeatureCollection } from '../../Core/Features/SomeFeature/SomeFeatureCollection';
import { SomeRepository } from '../../Data/SomeRepository';

const SomeFeatureCollectionImplementation = () =>{
  
  // Secondary dependencies
  const someRepo = new SomeRepository();
  const someStore = useSomeStore();

  // Primary dependencies
  const getSomeDataHandler = new GetSomeDataHandler(someRepo, someStore);

  return new SomeFeatureCollection({
    getSomeDataHandler
  })

}

export const DependencyFactory = {
  SomeFeatureCollectionImplementation
}
