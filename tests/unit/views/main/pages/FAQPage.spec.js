import {shallowMount} from '@vue/test-utils'
import {createStore} from "vuex";
import FAQPage from "@/views/main/pages/FAQPage";
import FAQCard from "@/views/main/components/FAQCard";

describe('FAQPage', () => {
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
        wrapper = shallowMount(FAQPage, {
            global: {
                plugins: [mockStore]
            },
            mocks: {
                $store: mockStore
            }
        });
    });

    it('데이터에 따라 올바른 개수의 FAQCard가 생성되는가', () => {

        let cards = wrapper.findAllComponents(FAQCard);

        expect(cards.length).toBe(2);
    });

    it('showAnswer()', () => {
        wrapper.vm.showAnswer(1);
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.currentFAQId).toBe(1);
            expect(wrapper.vm.toggle).toBeFalsy();
        });
    });

    it('showCards()', () => {
        wrapper.vm.showCards();
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.toggle).toBeTruthy();
        });

    });
});
