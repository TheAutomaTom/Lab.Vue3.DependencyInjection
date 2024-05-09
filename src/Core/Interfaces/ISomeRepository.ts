import type { GetSomeDataRequest } from "../Features/SomeFeature/GetSomeData/GetSomeDataRequest";
import type { GetSomeDataResult } from "../Features/SomeFeature/GetSomeData/GetSomeDataResult";

export interface ISomeRepository{
  TryGetSomeData(request: GetSomeDataRequest): Awaited<Promise<GetSomeDataResult>>;

}
