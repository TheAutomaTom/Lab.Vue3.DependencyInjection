export class GetSomeDataRequest{

  input: string;

  constructor(input: string){
    console.log(`GetSomeDataRequest.constructor`);
    this.input = input;
  }

}
