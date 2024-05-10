import { setActivePinia, createPinia } from 'pinia'
import {describe, it, expect, beforeEach } from 'vitest';

import { useSomeStore } from '../Core/Features/SomeFeature/SomeStore';

describe('SomeFeatureStore', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia());
  })

  it('Gets Data', () => {
    const store = useSomeStore()
    expect(store.GetSomeData("XYZ")).toBe("ZYX");
  })

})