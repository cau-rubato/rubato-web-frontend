<template>
  <HeaderLayout :menus="menus" />
  <router-view></router-view>
  <FooterLayout />
</template>

<script>
import HeaderLayout from "@/layouts/HeaderLayout.vue";
import FooterLayout from "@/layouts/FooterLayout.vue";

export default {
  name: "app",
  data() {
    return {
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
    };
  },
  components: {
    HeaderLayout,
    FooterLayout,
  },
};
</script>

<style>
</style>
