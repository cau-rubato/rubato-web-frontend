import {shallowMount} from '@vue/test-utils'
import FAQCard from "@/views/main/components/FAQCard";

describe('FAQCard', () => {

    it('올바른 값이 출력되는지 테스트', () => {
        const wrapper = shallowMount(FAQCard, {
            props: {
                faq: {
                    id: 1,
                    question: "A",
                    answer: "B"
                }
            }
        });

        let text = wrapper.find(".quest").text();
        expect(text).toBe("Q.A");
    });
});