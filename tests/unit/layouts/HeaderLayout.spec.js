import { shallowMount } from '@vue/test-utils'
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import NavItem from '@/layouts/components/NavItem.vue'

describe('HeaderLayout', () => {

    it('로고 정상 출력', () => {
        const wrapper = shallowMount(HeaderLayout);

        const brand = wrapper.find('.navbar-brand');
        expect(brand.exists()).toBeTruthy();
        expect(brand.text()).toBe("Rubato");
    });

    it('로그인 버튼 정상 출력', () => {
        const wrapper = shallowMount(HeaderLayout);

        const portalButton = wrapper.find('.portal');
        const donateButton = wrapper.find('.donate');

        expect(portalButton.exists()).toBeTruthy();
        expect(portalButton.text()).toBe("로그인");

        expect(donateButton.exists()).toBeTruthy();
        expect(donateButton.text()).toBe("후원하기");
    });

    it('메뉴 정상 출력', () => {
        const wrapper = shallowMount(HeaderLayout, {
            propsData: {
                menus: [
                    {
                        id: 0,
                        name: "정기연주회",
                        route: "/concert",
                    },
                    {
                        id: 1,
                        name: "단원 정보",
                        route: "/member",
                    },
                ],
            }
        });

        const items = wrapper.findAllComponents(NavItem);
        expect(items.length).toBe(2);
    });

});