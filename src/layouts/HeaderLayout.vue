<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
    <div class="container px-5">
      <a class="navbar-brand" href="/">Rubato</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <NavItem
            v-for="(menu, i) in menus"
            :key="i"
            :menu="menu"
            class="nav-item"
          />
        </ul>

        <button class="btn btn-success disabled donate me-2" type="submit">
          후원하기
        </button>

        <button class="btn btn-outline-light portal disabled" type="submit">
          로그인
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import NavItem from "@/layouts/components/NavItem.vue";

export default {
  name: "HeaderLayout",
  data() {
    return {};
  },

  props: {
    menus: Object,
  },

  components: {
    NavItem,
  },
};
</script>

<style>
</style>