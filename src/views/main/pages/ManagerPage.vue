<template>
  <div class="managers container py-6 pt-6 px-custom">
    <h2 class="text-custom"><strong>회장단</strong></h2>
    <h2 class="display-4 concert-title mt-5">루바토 회장단을<br/>소개합니다</h2>
    <div class="row mt-6">
      <div v-for="(manager, i) in managers" :key="i" class="col-4 text-center">
        <img class="avatar-custom" :src="manager.imgRoute" />
        <h4 class="mt-4"><strong>{{ manager.type }}</strong></h4>
        <h5 class="display-9">{{ manager.instrument }}. {{ manager.generation }}기 {{ manager.name }}</h5>
        <h5 class="display-9">{{ manager.department }} {{ manager.studentID }}</h5>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ManagerPage",
  data() {
    return {
      managers: [
        {
          name: "이진욱",
          type: "회장",
          instrument: "Vc",
          generation: 37,
          department: "전자전기공학부",
          studentID: 17,
          imgRoute: require("@/assets/images/main.jpeg")
        },
        {
          name: "박민정",
          type: "부회장",
          instrument: "Vn",
          generation: 37,
          department: "중어중문학과",
          studentID: 20,
          imgRoute: require("@/assets/images/main.jpeg")
        },
        {
          name: "손차희",
          type: "총무",
          instrument: "Vn",
          generation: 37,
          department: "경영학과",
          studentID: 21,
          imgRoute: require("@/assets/images/main.jpeg")
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>