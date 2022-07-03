import {shallowMount} from '@vue/test-utils'
import {createStore} from "vuex";
import FAQDetail from "@/views/main/components/FAQDetail";

describe('FAQDetail', () => {
    let wrapper;
    let mockStore;

    beforeEach(() => {

        mockStore = createStore({
            state: {
                faqs: [
                    {
                        id: 0,
                        question: "A",
                        answer: "B"
                    },
                    {
                        id: 1,
                        question: "C",
                        answer: "D"
                    }
                ]

            }
        });

        wrapper = shallowMount(FAQDetail, {
            global: {
                plugins: [mockStore]
            },
            mocks: {
                $store: mockStore
            },
            props: {
                faqId: 1
            }
        });
    });

    it('데이터에 따라 화면에 잘 표시되는지 테스트', () => {
        let question = wrapper.find("h1").text();
        let answer = wrapper.find("p").text();

        expect(question).toBe("C");
        expect(answer).toBe("D");

    });

});