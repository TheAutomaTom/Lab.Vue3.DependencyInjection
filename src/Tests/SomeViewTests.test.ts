// import { describe, expect, it, vi } from 'vitest'

// import { createTestingPinia } from '@pinia/testing'
// import { mount } from '@vue/test-utils'
// import SomeView from '@/App/Views/SomeView.vue'
// import useSomeStore from '@/Core/Features/SomeFeature/SomeStore'

// vi.mock('../Data/SomeRepository.ts', async (importOriginal) => {
//   const mod = await importOriginal<typeof import('../Data/SomeRepository.ts')>()
//   return {
//     ...mod,
//     // replace some exports
//     namedExport: vi.fn(),
//   }
// })

// describe('Store', () => {
//   it('Has dependencies provided.', async () => {
//     mount(SomeView, {
//       global: {
//         plugins: [
//           createTestingPinia({
//             createSpy: vi.fn,
//           }),
//         ],
//       },
//     })

//     const store = useSomeStore();
//     const response = store.GetSomeData("XYZ");
//     // const sut = response.data;
//     expect(response).toBeUndefined();
//     // expect(sut).to.be("ZYX");
//   })
  
// })