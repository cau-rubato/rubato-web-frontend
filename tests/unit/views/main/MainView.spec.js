import { shallowMount } from '@vue/test-utils'
import MainView from "@/views/main/MainView";
import TopPage from "@/views/main/pages/TopPage";
import ConcertPage from "@/views/main/pages/ConcertPage";
import ManagerPage from "@/views/main/pages/ManagerPage";
import DonatePage from "@/views/main/pages/DonatePage";
import MapPage from "@/views/main/pages/MapPage";
import FAQPage from "@/views/main/pages/FAQPage";

describe('MainView', () => {
    it('', () => {
        const wrapper = shallowMount(MainView);

        const top = wrapper.findComponent(TopPage);
        const concert = wrapper.findComponent(ConcertPage);
        const manager = wrapper.findComponent(ManagerPage);
        const donate = wrapper.findComponent(DonatePage);
        const map = wrapper.findComponent(MapPage);
        const faq = wrapper.findComponent(FAQPage);

        expect(top.exists()).toBeTruthy();
        expect(concert.exists()).toBeTruthy();
        expect(manager.exists()).toBeTruthy();
        expect(donate.exists()).toBeTruthy();
        expect(map.exists()).toBeTruthy();
        expect(faq.exists()).toBeTruthy();
    });

});