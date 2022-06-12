import { shallowMount } from '@vue/test-utils'
import FooterLayout from '@/layouts/FooterLayout.vue'


describe('App', () => {

    it('Copyright Text 정상 출력', () => {
        const wrapper = shallowMount(FooterLayout);

        const copyright = wrapper.find('.copyright')
        expect(copyright.exists()).toBeTruthy()
        expect(copyright.text()).toBe("@RUBATO");
    });

    it('Address 정상 출력', () => {
        const wrapper = shallowMount(FooterLayout);

        const address = wrapper.find('.address')
        expect(address.exists()).toBeTruthy()
        expect(address.text()).toBe("서울특별시 동작구 흑석로 84 중앙대학교 서울캠퍼스 학생회관 607호");
    });

    it('이메일 정상 출력', () => {
        const wrapper = shallowMount(FooterLayout);

        const email = wrapper.find('.email')
        expect(email.exists()).toBeTruthy()
        expect(email.text()).toBe("Email : rubato-cau@gmail.com");
    });

    it('SNS 리스트 정상 출력', () => {
        const wrapper = shallowMount(FooterLayout);

        expect(wrapper.findAll(".sns").length).toBe(3);
        expect(wrapper.findAll(".sns")[1].find("a").attributes("href")).toBe("https://www.instagram.com/rubato_cau1985/")
    })

});