<template>
  <div class="patron bg-light">
    <div class="container page px-5">
      <h2 class="page-title main-color">후원 </h2>
      <h2 class="display-4 page-head mt-5 word-keep-all">
        도움의 손길이 필요합니다.
      </h2>
      <h5 class="text-muted mt-4 donate-detail">
        루바토가 오랫동안 즐겁게 연주할 수 있도록 응원과 관심 부탁드립니다.<br>금액의 크기는 중요치 않으며 함께해주심에 언제나 감사한 마음입니다.<br><br>여러분의 후원금은 공연 경비 마련 및 동아리방 관리 등 루바토의 기반을 다지는 데 귀하게 사용될 예정입니다.<br><br>
        <div class="main-color" style="display: inline">아마추어 오케스트라의 중앙, 중앙의 루바토</div>로 부끄럽지 않게 실력을 갈고 닦겠습니다.
      </h5>
      <button v-if="available" class="btn btn-outline-success btn-lg mt-5">후원하기</button>
      <button v-else class="btn btn-outline-success btn-lg mt-5 disabled">후원하기</button>
      <p class="not-available mt-2" v-if="!available">현재 후원이 불가능합니다.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DonatePage",
  data() {
    return {
      available: false,
    }
  }
}
</script>

<style scoped>
.donate-detail {
  line-height: 160%;
}

.not-available {
  font-weight: 100;
}

</style>