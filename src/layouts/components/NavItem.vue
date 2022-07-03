<template>
  <li class="nav-item">
            <a
              v-if="$route.path === menu.route"
              class="nav-link active"
              href="#"
              @click="navigate(menu.route)"
              >{{ menu.name }}</a
            >
            <a v-else class="nav-link" href="#" @click="navigate(menu.route)">{{
              menu.name
            }}</a>
    </li>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    menu: Object
  },
  methods: {
    navigate(route) {
      this.$router.push({path:route});
    },
  }
};
</script>

<style>
</style>