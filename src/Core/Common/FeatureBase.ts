

export class FeatureBase<T> {
  public store: T;

  constructor( store: T) {
    // Router is an example of another member, here.
    console.log(`FeatureBase.constructor`);

    this.store = store;
  }
}