<template>
  <div class="top-page">
    <div class="black-screen">
      <div class="container page px-5">
        <h1 class="display-3 text-light text-center">
          CHUNG-ANG UNIVERSITY <br/>AMATEUR ORCHESTRA <strong class="main-color">RUBATO</strong>
        </h1>
        <p class="text-light mt-5 text-center lead">
          매 학기 방학마다 진행하는 정기연주회를 중심으로,<br/> 다양한 활동들을 꾸준히 이어나가고 있습니다.
        </p>
        <p class="text-light text-center">지금, <strong class="main-color">RUBATO</strong>에 합류하세요.</p>

        <div class="text-center mt-4">
          <button v-if="apply_state.available" type="button" class="btn btn-outline-light btn-lg mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">지원하기 <i class="bi bi-chevron-right"></i></button>
          <button v-else type="button" class="btn btn-outline-light btn-lg mt-5 disabled" data-bs-toggle="modal" data-bs-target="#exampleModal">지원하기 <i class="bi bi-chevron-right"></i></button>
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