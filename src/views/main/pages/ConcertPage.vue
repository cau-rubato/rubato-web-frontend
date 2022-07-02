<template>
  <div class="concerts bg-light">
    <div class="container page px-5">
      <h2 class="page-title main-color">정기연주회</h2>
      <div class="concert-detail mt-5 row">
        <div class="col-6">
          <h1 class="display-4 page-head">제 58회<br/>정기 연주회 <br/>: Resurrection</h1>

          <div class="col-10"><img class="poster mt-5" src="@/assets/images/profile.png" /></div>
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col-2"></div>
            <div class="col-10">
              <img class="poster" src="@/assets/images/poster.png" />
              <h2 class="mt-5">
                Lorem ipsum dolor sit amet, consectetur,<br/>Lorem ipsum dolor sit amet, consectetur
              </h2>
            </div>
          </div>
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
.poster {
  width: 100%;
  filter: drop-shadow(-40px 40px 30px #555);
  border-radius: 15px;
}

</style>