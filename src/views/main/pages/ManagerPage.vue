<template>
  <div class="managers container page px-5">

    <h2 class="page-title main-color">회장단</h2>
    <h2 class="display-4 page-head mt-5">루바토 회장단을<br/>소개합니다</h2>

    <div class="row mt-5 gap-5">
      <ManagerProfile v-for="(manager, i) in $store.state.managers" :key="i" :manager="manager"/>
    </div>

  </div>
</template>

<script>
import ManagerProfile from "@/views/main/components/ManagerProfile";
export default {
  name: "ManagerPage",
  components: {ManagerProfile},
}
</script>

<style scoped>

</style>