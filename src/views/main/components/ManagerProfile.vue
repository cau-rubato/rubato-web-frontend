<template>
  <div class="col text-center">
    <img class="manager-profile" :src="manager.imgRoute" />
    <h4 class="manager-type mt-4"><strong>{{ manager.type }}</strong></h4>
    <h5 class="manager-club-info display-9">{{ manager.instrument }}. {{ manager.generation }}기 {{ manager.name }}</h5>
    <h5 class="manager-college-info display-9">{{ manager.department }} {{ manager.studentID }}</h5>
  </div>
</template>

<script>
export default {
  name: "ManagerProfile",
  props: {
    manager: Object,
  }
}
</script>

<style scoped>
.manager-profile {
  border-radius: 70%;
  width: 220px;
  height: 220px;
  overflow: hidden;
}
</style>