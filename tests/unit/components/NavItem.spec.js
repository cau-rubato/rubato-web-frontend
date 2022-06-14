import { shallowMount } from '@vue/test-utils'
import NavItem from '@/components/NavItem.vue'

describe('NavItem', () => {

    it('props로 넘어온 데이터에 따라 올바르게 생성되었는가?', () => {
        const wrapper = shallowMount(NavItem, {
            propsData: {
                menu:
                {
                    id: 0,
                    name: "정기연주회",
                    route: "/concert",
                }
            },
            global: {
                mocks: {
                    $route: {
                        path: "/member"
                    }
                }
            }
        });

        expect(wrapper.find('.nav-link').text()).toBe("정기연주회")
    });

    it('props.menu.route와 현재 route가 같은 경우 active.', () => {
        const wrapper = shallowMount(NavItem, {
            propsData: {
                menu:
                {
                    id: 0,
                    name: "정기연주회",
                    route: "/concert",
                }
            },
            global: {
                mocks: {
                    $route: {
                        path: "/concert"
                    }
                }
            }
        });

        expect(wrapper.find('.active').exists()).toBeTruthy()

    });

    it('props.menu.route와 현재 route가 다른 경우 active하지 않음.', () => {
        const wrapper = shallowMount(NavItem, {
            propsData: {
                menu:
                {
                    id: 0,
                    name: "정기연주회",
                    route: "/concert",
                }
            },
            global: {
                mocks: {
                    $route: {
                        path: "/member"
                    }
                }
            }
        });

        expect(wrapper.find('.active').exists()).toBeFalsy()

    });


});