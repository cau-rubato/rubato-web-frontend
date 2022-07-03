<template>
  <div class="top-page">
    <div class="black-screen">
      <div class="container page px-5">
        <h1 class="display-3 text-light text-center">
          CHUNG-ANG UNIVERSITY <br/>AMATEUR ORCHESTRA <strong class="main-color" style="text-shadow: 5px 5px 10px black;">RUBATO</strong>
        </h1>
        <p class="text-light mt-5 text-center lead">
          박자에 얽매이지 않고 자유롭게 하는 연주법이란 뜻을 가진 루바토에는,<br>음악을 사랑하는 중앙대학교 학우들이 모두 모여 자유롭게 오케스트라 활동을 이어나가고 있습니다.
        </p>

        <p class="text-light text-center mt-5">지금, <strong class="main-color">RUBATO</strong>에 합류하세요.</p>

        <div class="text-center">
          <button v-if="apply_state.available" type="button" class="btn btn-outline-light btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">지원하기 <i class="bi bi-chevron-right"></i></button>
          <button v-else type="button" class="btn btn-outline-light btn-lg disabled" data-bs-toggle="modal" data-bs-target="#exampleModal">지원하기 <i class="bi bi-chevron-right"></i></button>
        </div>

        <div class="caption">
          <p v-if="apply_state.available" class="text-light text-center mt-2" style="font-weight:100;">
            {{ apply_state.start }} ~ {{ apply_state.end }}
          </p>

          <p v-else class="text-light text-center mt-2" style="font-weight:100;">
            지금은 지원 기간이 아닙니다.
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopPage",
  data() {
    return {
      apply_state: {
        available: false,
        start: "2022.06.25",
        end: "2022.07.20"
      }
    }
  }

}
</script>

<style scoped>
.top-page {
  background-image: url('@/assets/images/bg01.jpeg');
  background-position: center;
  background-size: cover;
}

.black-screen {
  width: 100%; height: 100%;
  background-color: rgba(0,0,0,0.7);
}
</style>