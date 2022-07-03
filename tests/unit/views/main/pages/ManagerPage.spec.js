import { shallowMount } from '@vue/test-utils'
import ManagerPage from "@/views/main/pages/ManagerPage";
import ManagerProfile from "@/views/main/components/ManagerProfile";
import { createStore } from "vuex";

describe('ManagerPage', () => {
    it('데이터에 따라 올바른 갯수의 ManagerProfile들이 생성되는가', () => {

        const mockStore = createStore({
            state: {
                managers: [
                    {
                        name: "이진욱",
                        type: "회장",
                        instrument: "Vc",
                        generation: 34,
                        department: "전자전기공학부",
                        studentID: 17,
                        imgRoute: require("@/assets/images/main.jpeg")
                    },
                    {
                        name: "박민정",
                        type: "부회장",
                        instrument: "Vn",
                        generation: 37,
                        department: "중어중문학과",
                        studentID: 20,
                        imgRoute: require("@/assets/images/main.jpeg")
                    },
                    {
                        name: "손차희",
                        type: "총무",
                        instrument: "Vn",
                        generation: 37,
                        department: "경영학과",
                        studentID: 21,
                        imgRoute: require("@/assets/images/main.jpeg")
                    },
                ],
            }
        });

        const wrapper = shallowMount(ManagerPage, {
            global: {
                plugins: [mockStore]
            },
            mocks: {
                $store: mockStore
            }
        });

        const profiles = wrapper.findAllComponents(ManagerProfile);

        expect(profiles.length).toBe(3);
    });

});