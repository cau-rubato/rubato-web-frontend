<template>
  <TopPage />
  <ConcertPage />
  <ManagerPage />
  <DonatePage />
  <MapPage />
  <FAQPage />
</template>

<script>
import TopPage from "@/views/main/pages/TopPage";
import ConcertPage from "@/views/main/pages/ConcertPage";
import ManagerPage from "@/views/main/pages/ManagerPage";
import DonatePage from "@/views/main/pages/DonatePage";
import MapPage from "@/views/main/pages/MapPage";
import FAQPage from "@/views/main/pages/FAQPage";
export default {
    name: "MainView",
  components: {FAQPage, MapPage, DonatePage, ManagerPage, ConcertPage, TopPage},

}
</script>

<style>
</style>