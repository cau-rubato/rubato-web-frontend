import {shallowMount} from '@vue/test-utils'
import ManagerProfile from "@/views/main/components/ManagerProfile";

describe('ManagerProfile', () => {
    it('props로 전달된 값이 잘 표시되는지 테스트', () => {
        const wrapper = shallowMount(ManagerProfile, {
            props: {
                manager: {
                    name: "이진욱",
                    type: "회장",
                    instrument: "Vc",
                    generation: 37,
                    department: "전자전기공학부",
                    studentID: 17,
                    imgRoute: require("@/assets/images/main.jpeg")
                },
            }
        });

        let manager_type = wrapper.find(".manager-type").text();
        let club_info = wrapper.find(".manager-club-info").text();
        let college_info = wrapper.find(".manager-college-info").text();

        expect(manager_type).toBe("회장");
        expect(club_info).toBe("Vc. 37기 이진욱");
        expect(college_info).toBe("전자전기공학부 17");

    });

});