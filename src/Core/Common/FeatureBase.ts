

export class FeatureBase<T> {
  public store: T;

  constructor( store: T) {
    // Router is an example of another member, here.
    this.store = store;
  }
}