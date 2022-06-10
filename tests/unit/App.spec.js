import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'


describe('App', () => {
    const wrapper = shallowMount(App)
    it('exists', () => {
        expect(wrapper.exists()).toBeTruthy()
    });
})