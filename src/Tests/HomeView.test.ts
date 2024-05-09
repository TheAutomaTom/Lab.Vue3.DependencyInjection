import {describe, it, expect } from 'vitest';

import {mount} from '@vue/test-utils';
import HomeView from '../App/Views/HomeView.vue';

describe('SomeView', () => {
  it('Renders title.', () => {
    const wrapper = mount(HomeView);
    expect(wrapper.text()).toContain('Home View');
  })  
})
