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
.return-list:hover {
    cursor: pointer;
    color: #277DA1;
}

.quest {
    font-weight: 400;
    line-height: 150%;
}

.qicon {
    font-weight: 600;
    line-height: 150%;
}

.faq-card {
    width: 100%;
    padding-bottom: 12px;
    padding-top: 15px;
    padding-left: 40px;
    padding-right: 40px;
    border-radius: 8px;
}

.faq-card:hover {
    cursor: pointer;
    background-color: #E8E9Ea;
}

.top-page {
    background-image: url('@/assets/images/bg01.jpeg');
    background-position: center;
    background-size: cover;
}

.black-screen {
    width: 100%; height: 100%;
    background-color: rgba(0,0,0,0.7);
}

.py-6 {
    padding-top: 210px !important;
    padding-bottom: 210px !important;
}

.pt-6 {
    padding-top: 140px !important;
}

.mt-6 {
    margin-top: 150px;
}

.poster {
    width: 100%;
    filter: drop-shadow(-40px 40px 30px #555);
    border-radius: 15px;
}

.text-custom {
    color: #277DA1;
}

.concert-title {
    line-height: 1.4;
    font-weight: 700;
}

.px-custom {
    padding-left: 5%;
    padding-right: 5%;
}

.avatar-custom {
    border-radius: 70%;
    width: 220px;
    height: 220px;
    overflow: hidden;
}

</style>