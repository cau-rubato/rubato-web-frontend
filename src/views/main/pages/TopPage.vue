<template>
  <div class="top-page">
    <div class="black-screen py-6 px-3">
      <div class="container">
        <h1 class="display-3 text-light text-center">
          CHUNG-ANG UNIVERSITY <br/>AMATEUR ORCHESTRA <strong class="text-custom">RUBATO</strong>
        </h1>
        <p class="text-light mt-5 text-center lead">
          매 학기 방학마다 진행하는 정기연주회를 중심으로,<br/> 다양한 활동들을 꾸준히 이어나가고 있습니다.
        </p>
        <p class="text-light text-center">지금, <strong class="text-custom">RUBATO</strong>에 합류하세요.</p>
        <div class="text-center mt-4">
          <button type="button" class="btn btn-outline-light btn-lg mt-5 disabled" data-bs-toggle="modal" data-bs-target="#exampleModal">지원하기 <i class="bi bi-chevron-right"></i></button>
        </div>
        <p class="text-light text-center mt-2" style="font-weight:100;">
          지금은 지원 기간이 아닙니다.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopPage",
  data() {
    return {
      apply_state: false,
    }
  }

}
</script>

<style scoped>

</style>