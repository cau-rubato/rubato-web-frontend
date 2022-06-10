<template>
  <HeaderLayout />
  <router-view></router-view>
  <FooterLayout />
</template>

<script>
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue'

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    HeaderLayout,
    FooterLayout
  }
};
</script>

<style>
</style>
