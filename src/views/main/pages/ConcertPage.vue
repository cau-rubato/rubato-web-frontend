<template>
  <div class="concerts bg-light">
    <div class="container page px-5">
      <h2 class="page-title main-color">정기연주회</h2>
      <div class="concert-detail mt-5 row gap-5">
        <div class="col">
          <h1 class="display-4 page-head">제 58회<br/>정기 연주회</h1>
          <h1 class="display-2 concert-name mt-3 concert-bottom-margin">RESURRECTION</h1>
          <img class="poster t-5" src="@/assets/images/poster.png" />
        </div>
        <div class="col">
              <img class="poster concert-bottom-margin" src="@/assets/images/profile.png" />
              <h4 class="word-keep-all mt-5 concert-tail">
                <i>작은 소리들이 모여<br/>하나의 큰 선율이 되는 곳,<br/>참아왔던 그 동안의 이야기,<br/><i class="main-color" style="text-shadow: 5px 5px 10px lightgray;">Ancora Rubato!</i></i>
              </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConcertPage"
}
</script>

<style scoped>
.concert-tail {
  text-align: center;
  line-height: 150%;
}

.poster {
  width: 100%;
  filter: drop-shadow(-25px 25px 30px #555);
  border-radius: 15px;
}

.concert-name {
  font-family: Kepolu;
  text-shadow: 5px 5px 10px lightgray;
}

.concert-bottom-margin {
  margin-bottom: 4rem;
}

</style>