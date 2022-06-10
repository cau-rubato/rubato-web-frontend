import { shallowMount, mount } from '@vue/test-utils'
import App from '@/App.vue'
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue'


describe('App', () => {
    it('App exists', () => {
        const wrapper = shallowMount(App)
        expect(wrapper.exists()).toBeTruthy()
    });

    it('Layout Assembly Test', () => {
        const wrapper = mount(App);

        expect(wrapper.findComponent(HeaderLayout).exists()).toBeTruthy();
        expect(wrapper.findComponent(FooterLayout).exists()).toBeTruthy();
    });
});